const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "64pyve",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 6000,
    baseUrl: 'http://54.39.177.218:8080/#/public/sign-in',
    specPattern: 'cypress/e2e/*.ts'
  },
});
