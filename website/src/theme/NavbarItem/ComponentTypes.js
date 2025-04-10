import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import { HeaderDownloadButton } from '@site/src/components/DownloadButton';
import { TelemetryLink } from '@site/src/components/TelemetryLink';

// "Custom" navbar items to be added
export default {
  ...ComponentTypes,
  'custom-telemetryLink': props => (
    <TelemetryLink {...props} className="navbar__item navbar__link">
      Downloads
    </TelemetryLink>
  ),
  'custom-downloadButton': () => <HeaderDownloadButton className="navbar__item navbar__link" />,
};
