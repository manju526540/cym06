import login from"../pageobjectmodule/login.po"
import logindata from"../fixtures/login.json"
describe('template spec', () => {
  cy.on("uncaught:exception",()=>{
    return false
  })
    beforeEach("login",()=>{
    //     cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits",{
    //         statusCode: 200
    // }).as("subunit")
         cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits",{
            forceNetworkError : true
    }).as("subunit")
         
         
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