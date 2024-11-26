import login from"../../pageobjectmodule/login.po"
import logindata from"../../fixtures/login.json"
describe('template spec', () => {
    beforeEach("login",()=>{
       cy.intercept({
        method : "GET",
        url : "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC"
       },
       (req)=>{
        req.query.limit=2
        req.query.sortOrder="ASE"
       })
      .as("admin")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(login.userNameInput()).type(logindata.username)
        cy.get(login.passWordInput()).type(logindata.password)
        cy.get(login.logInBtn()).click()
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').should("be.visible")
    })
    it('passes', () => {
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
        cy.wait("@admin").its('response.statusCode').should("eq",200)
            //expect(response.body.data[0].userName).to.eq("Admin1")
        })
    })

