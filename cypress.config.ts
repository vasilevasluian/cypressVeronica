import { defineConfig } from "cypress";
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      return await setupNodeEvents(on, config);
    },
    // Your existing config
    env: {
      username: "vasilevasluian",
      password: "8@L3qQhs@NtK8y8"
    },
    baseUrl: "https://automationteststore.com/",
    
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: false,
      json: true,
      reportFilename: 'report-[name]-[datetime]',
      timestamp: 'mmddyyyy_HHMMss',
      charts: true,
      embeddedScreenshots: true,
    },
  },
});