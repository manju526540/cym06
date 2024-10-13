const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    //baseUrl:'https://opensource-demo.orangehrmlive.com',
    env:{
      "firstname":"manju",
      "lastname":"c"
    },
    viewportWidth:1920,
    viewportHeight:1080,
    retries:{"openMode":1},
    pageLoadTimeout:40000,
    defaultCommandTimeout:4000,
    watchForFileChanges:false,
    videosFolder:"cypress/manju",
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
