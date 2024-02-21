const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5ecu7t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
