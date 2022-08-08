import {AppConfigurationSynchronizer, FileConfigurationSyncOptions, ConfigurationFormat, ConfigurationProfile, FileConfigurationSettingsSource} from "azure-app-configuration-sync";

import { AppConfigurationClient, SetConfigurationSettingParam } from "@azure/app-configuration";


async function main() {
  const connectionString: string =
    "<Connection string of your AppConfiguration store>";

  let configClient: AppConfigurationClient = new AppConfigurationClient(connectionString);
  let syncClient: AppConfigurationSynchronizer = new AppConfigurationSynchronizer(configClient);
  let options: FileConfigurationSyncOptions = {
    filePath: "D:\\appconfig\\import\\sample\\sample.json",
    separator: ":",
    format: ConfigurationFormat.Json,
    skipFeatureFlags: false,
    profile: ConfigurationProfile.Default,
  };

    await syncClient.Import(new FileConfigurationSettingsSource(options), 1000, false);
}

main();

