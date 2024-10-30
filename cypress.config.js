const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    //baseUrl:'https://opensource-demo.orangehrmlive.com',
    env:{
      "firstname":"manju",
      "lastname":"c",
      "getemployees":"web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      "API cokie":"orangehrm=dng0417p349ta9kdi7q0mjkd25",
      
    },
    viewportWidth:1920,
    viewportHeight:1080,
    retries:{"openMode":2},
    pageLoadTimeout:40000,
    defaultCommandTimeout:4000,
    watchForFileChanges:false,
    videosFolder:"cypress/manju",
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
