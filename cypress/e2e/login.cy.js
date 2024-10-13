import logindata from "../fixtures/login.json"
import login from "../pageobjectmodule/login.po"
import dashboard from "../pageobjectmodule/dashbord.po"
describe('validating the login page', () => {
  it.only('evalid username and valid password', () => {
    cy.visit('/')
    login.loginwithcreds(logindata.username,logindata.password)
    cy.contains(dashboard.dashboardMenu()).should("be.visible")
    cy.contains(dashboard.TimeNdworkMenu()).should("be.visible")
  })
})
it('invalid username and valid password', () => {
  cy.visit('/')
  cy.get(login.userNameInput()).type("admin02")
  cy.get(login.passWordInput()).type('admin123')
  cy.get(login.logInBtn()).click()
  cy.contains(login.loginErorMessage).should('be.visible')
})
it('valid username and invalid password', () => {
  cy.visit('/')
  cy.get(login.userNameInput()).type("admin")
  cy.get(login.passWordInput()).type("admin048")
  cy.get(login.logInBtn()).click()
  cy.contains(login.loginErorMessage).should('be.visible')
})
it('invalid username and invalid password', () => {
  cy.visit('/')
  cy.get(login.userNameInput()).type("admin04")
  cy.get(login.passWordInput()).type("admin048")
  cy.get(login.logInBtn()).click()
  cy.contains(login.loginErorMessage).should('be.visible')
})

