import logindata from "../fixtures/login.json"
import login from "../pageobjectmodule/login.po"
import dashboard from "../pageobjectmodule/dashbord.po"
import jobtitle from "../pageobjectmodule/jobtitle.po"
it('passevalid username and valid password', () => {
    cy.visit('/')
    cy.get(login.credsInput("username")).type(logindata.username)
    cy.get(login.credsInput("password")).type(logindata.password)
    cy.get(login.logInBtn()).click()
    cy.contains(dashboard.dashboardMenu()).should("be.visible")
    cy.contains(dashboard.TimeNdworkMenu()).should("be.visible")
    cy.contains(dashboard.PimMenuiteam()).should("be.visible")
    cy.contains(dashboard.AdminMenu()).click()
    cy.contains(jobtitle.JobMenu()).click()
    cy.contains(jobtitle.JobTitlemenu()).click()
    cy.get(jobtitle.AddBtm()).click()
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('tester'+r)
    cy.get(jobtitle.SubmitBtn()).click()
    cy.contains(jobtitle.SuccessMsg()).should("be.visible")
})
