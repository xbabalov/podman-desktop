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
import { ImagesPage } from './model/pages/images-page';

let pdRunner: PodmanDesktopRunner;
let page: Page;
let navBar: NavigationBar;
let registryUrl: string;
let registryUsername: string;
let registryPswdSecret: string;
let imageName: string;
let imageTag: string;
let imageUrl: string;

beforeAll(async () => {
  pdRunner = new PodmanDesktopRunner();
  page = await pdRunner.start();
  pdRunner.setVideoAndTraceName('registry-image-e2e');

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
  imageName = process.env.REGISTRY_IMAGE_NAME ? process.env.REGISTRY_IMAGE_NAME : 'alpine-hello';
  imageTag = process.env.REGISTRY_IMAGE_TAG ? process.env.REGISTRY_IMAGE_TAG : 'latest';
  imageUrl = registryUrl + '/' + registryUsername + '/' + imageName;

  const welcomePage = new WelcomePage(page);
  await welcomePage.handleWelcomePage(true);
  navBar = new NavigationBar(page);
});

afterAll(async () => {
  const imagesPage = new ImagesPage(page);
  const imageDetailPage = await imagesPage.openImageDetails(imageUrl);
  await imageDetailPage.deleteButton.click();

  await navBar.openSettings();
  const settingsBar = new SettingsBar(page);
  const registryPage = await settingsBar.openTabPage(RegistriesPage);
  await registryPage.removeRegistry('GitHub');

  await pdRunner.close();
});

beforeEach<RunnerTestContext>(async ctx => {
  ctx.pdRunner = pdRunner;
});

describe('Pulling image from authenticated registry workflow verification', async () => {
  test('Cannot pull image from unauthenticated registry', async () => {
    const imagesPage = await navBar.openImages();

    const fullImageTitle = imageUrl.concat(':' + imageTag);
    const errorMessage = page.getByText(
      'Error while pulling image from Podman: access to image "' +
        fullImageTitle +
        '" is denied (500 error). Can also be that the registry requires authentication.',
    );

    const pullImagePage = await imagesPage.openPullImage();
    const imageNameInput = pullImagePage.page.getByLabel('imageName');
    const pullImageButton = pullImagePage.page.getByRole('button', { name: 'Pull' });

    await imageNameInput.fill(fullImageTitle);
    await pullImageButton.click();

    await playExpect(errorMessage).toBeVisible();
  });
  test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')('Add registry', async () => {
    await navBar.openSettings();
    const settingsBar = new SettingsBar(page);
    const registryPage = await settingsBar.openTabPage(RegistriesPage);

    await registryPage.createRegistry(registryUrl, registryUsername, registryPswdSecret);

    const registryBox = registryPage.registriesTable.getByLabel('GitHub');
    const username = registryBox.getByText(registryUsername);
    await playExpect(username).toBeVisible();
  });
  test.runIf(registryUrl !== '' && registryUsername !== '' && registryPswdSecret !== '')(
    'Image pulling from authenticated registry verification',
    async () => {
      const imagesPage = await navBar.openImages();

      const fullImageTitle = imageUrl.concat(':' + imageTag);
      const pullImagePage = await imagesPage.openPullImage();
      const updatedImages = await pullImagePage.pullImage(fullImageTitle);

      const exists = await updatedImages.waitForImageExists(imageUrl);
      playExpect(exists, fullImageTitle + ' image not present in the list of images').toBeTruthy();
    },
  );
});
