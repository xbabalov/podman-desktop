/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type { Page } from 'playwright';
import { PodmanDesktopRunner } from './runner/podman-desktop-runner';
import { afterAll, beforeAll, test, describe, beforeEach } from 'vitest';
import { expect as playExpect } from '@playwright/test';
import type { RunnerTestContext } from './testContext/runner-test-context';
import { WelcomePage } from './model/pages/welcome-page';
import { SettingsBar } from './model/pages/settings-bar';
import { RegistriesPage } from './model/pages/registries-page';
import { NavigationBar } from './model/workbench/navigation';

let pdRunner: PodmanDesktopRunner;
let page: Page;
let navBar: NavigationBar;
let registryUrl: string;
let registryUsername: string;
let registryPswdSecret: string;
let registryName: string;

beforeAll(async () => {
  pdRunner = new PodmanDesktopRunner();
  page = await pdRunner.start();
  pdRunner.setVideoAndTraceName('registry-e2e');

  registryUrl = process.env.REGISTRY_URL ? process.env.REGISTRY_URL : process.env.CI ? 'ghcr.io' : '';
  registryUsername = process.env.REGISTRY_USERNAME
    ? process.env.REGISTRY_USERNAME
    : process.env.CI
      ? 'podmandesktop-ci'
      : '';
  registryPswdSecret = process.env.REGISTRY_PASSWD
    ? process.env.REGISTRY_PASSWD
    : process.env.CI
      ? process.env.PODMANDESKTOP_CI_BOT_TOKEN
        ? process.env.PODMANDESKTOP_CI_BOT_TOKEN
        : ''
      : '';
  registryName = 'GitHub';

  const welcomePage = new WelcomePage(page);
  await welcomePage.handleWelcomePage(true);
  navBar = new NavigationBar(page);
});

afterAll(async () => {
  await pdRunner.close();
});

beforeEach<RunnerTestContext>(async ctx => {
  ctx.pdRunner = pdRunner;
});

describe('Registries handling verification', async () => {
  test('Check Registries page components and presence of default registries', async () => {
    await navBar.openSettings();
    const settingsBar = new SettingsBar(page);
    const registryPage = await settingsBar.openTabPage(RegistriesPage);

    await playExpect(registryPage.addRegistryButton).toBeVisible();
    await playExpect(registryPage.addRegistryButton).toBeEnabled();

    const defaultRegistries = ['Docker Hub', 'Red Hat Quay', 'GitHub', 'Google Container Registry'];
    for (const registryName of defaultRegistries) {
      const registryBox = registryPage.registriesTable.getByLabel(registryName);
      await playExpect(registryBox).toBeVisible();
    }
  });
  describe('Registry addition workflow verification', async () => {
    test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')(
      'Cannot add invalid registry',
      async () => {
        const registryPage = new RegistriesPage(page);

        await registryPage.createRegistry('invalidUrl', 'invalidName', 'invalidPswd');
        const urlErrorMsg = page.getByText(
          /Unable to find auth info for https:\/\/invalidUrl\/v2\/\. Error: RequestError: getaddrinfo [A-Z_]+ invalidurl$/,
        );
        await playExpect(urlErrorMsg).toBeVisible({ timeout: 50000 });
        const cancelButton = page.getByRole('button', { name: 'Cancel' });
        await cancelButton.click();

        await registryPage.createRegistry(registryUrl, 'invalidName', 'invalidPswd');
        const credsErrorMsg = page.getByText('Wrong Username or Password.');
        await playExpect(credsErrorMsg).toBeVisible();
        await cancelButton.click();
      },
    );
    test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')(
      'Valid registry addition verification',
      async () => {
        const registryPage = new RegistriesPage(page);

        await registryPage.createRegistry(registryUrl, registryUsername, registryPswdSecret);
        await pdRunner.screenshot('registry-addition.png');

        const registryBox = registryPage.registriesTable.getByLabel(registryName);
        const username = registryBox.getByText(registryUsername);
        await playExpect(username).toBeVisible({ timeout: 50000 });
      },
    );
  });
  test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')(
    'Registry editing availability and invalid credentials verification',
    async () => {
      const registryPage = new RegistriesPage(page);

      await registryPage.editRegistry(registryName, 'invalidName', 'invalidPswd');
      const errorMsg = page.getByText('Wrong Username or Password.');
      await playExpect(errorMsg).toBeVisible();

      const cancelButton = page.getByRole('button', { name: 'Cancel' });
      await cancelButton.click();
    },
  );
  test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')(
    'Registry removal verification',
    async () => {
      const registryPage = new RegistriesPage(page);

      await registryPage.removeRegistry(registryName);
      const registryBox = registryPage.registriesTable.getByLabel(registryName);
      const username = registryBox.getByText(registryUsername);
      await playExpect(username).toBeHidden();
    },
  );
});
