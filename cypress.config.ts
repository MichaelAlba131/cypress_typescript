// @ts-ignore
import { defineConfig, PluginEvents, PluginConfigOptions } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// @ts-ignore
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  projectId: 'uqbvjv',
  reporter: 'spec',
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    specPattern: 'cypress/e2e/step_definitions/**/*.feature',
    async setupNodeEvents(
        on: PluginEvents,
        config: PluginConfigOptions
    ) {
      config.env = config.env || {};
      await addCucumberPreprocessorPlugin(on, config);

      on(
          'file:preprocessor',
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );

      allureWriter(on, config);

      return config;
    },
  },
  env: {
    'cypress-cucumber-preprocessor': {
      stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
    },
  },
});