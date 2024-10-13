// import logindata from "../fixtures/login.json"
// import employeedata from "../fixtures/addemployee.json"
 import addemployee from "../pageobjectmodule/addempoloyee.po"
 import login from"../pageobjectmodule/login.po"
// import dashboard from "../pageobjectmodule/dashbord.po"
// describe('validating the login page', () => {
//   it('passevalid username and valid password', () => {
//     cy.visit('/')
//     login.loginwithcreds(logindata.username,logindata.password)
//     cy.contains(dashboard.dashboardMenu()).should("be.visible")
//     cy.contains(dashboard.TimeNdworkMenu()).should("be.visible")
//     cy.contains(dashboard.PimMenuiteam()).click()
//     cy.wait(3000)
//     cy.contains("Add Employee").click()
//      addemployee.employeesFirstnameNdLastname(employeedata.firstname,employeedata.lastname)
//   })
// })
describe('validating the login page', () => {
     const menuiteams = {
         menu1 : "PIM",
         menu2 : "Admin",
         menu3 : "Dashboard",
         menu4 : "Leave"
     }
    it('passevalid username and valid password', () => {
      
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
      cy.get(login.userNameInput()).type("Admin")
      cy.get(login.passWordInput()).type("admin123")
      cy.get(login.logInBtn()).click()
      for(let iteam in menuiteams){
        cy.contains(menuiteams[iteam]).should("be.visible")
      }

      cy.contains("PIM").click()
      for(let i=0; i<=5; i++){
      cy.get('button[type="button"]').eq(8).click()
      cy.contains(' Yes, Delete ').click()
      cy.contains(addemployee.DeleteMessage).should("be.visible")
      }
    })
  })