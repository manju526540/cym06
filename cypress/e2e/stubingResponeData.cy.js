import login from"../pageobjectmodule/login.po"
import logindata from"../fixtures/login.json"
describe('template spec', () => {
  cy.on("uncaught:exception",()=>{
    return true
  })
    beforeEach("login",()=>{
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",{
            statusCode: 200,
    
    body : {
      "data":[
         {
      "empNumber": 159,
      "lastName": "Smith",
      "firstName": "Joy",
      "middleName": "",
      "employeeId": "0364",
      "terminationId": null,
      "jobTitle": {
          "id": 8,
          "title": "QA Lead",
          "isDeleted": false
      },
      "subunit": {
          "id": null,
          "name": null
      },
      "empStatus": {
          "id": null,
          "name": null
      },
      "supervisors": []
  }
]

    }
  }
  ).as("getemployee")
        
         
         
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(login.userNameInput()).type(logindata.username)
        cy.get(login.passWordInput()).type(logindata.password)
        cy.get(login.logInBtn()).click()
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').should("be.visible")
    })
    it('passes', () => {
      cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //   cy.wait('@subunit').then(({response})=>{
    //     expect(response.statusCode).to.equal(200)
    //   })
    })
  })