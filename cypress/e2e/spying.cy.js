import login from "../pageobjectmodule/login.po"
import logindata from "../fixtures/login.json"

describe('writting the intercept concept', () => {
    beforeEach("login",()=>{
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0").as("EmployessStatus")
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC").as("getemployees")
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0").as("jobtittle")
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits").as('Subunites')
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(login.userNameInput()).type(logindata.username)
        cy.get(login.passWordInput()).type(logindata.password)
        cy.get(login.logInBtn()).click()
        //cy.contains('PIM').should("be.visible")
    })
    afterEach(()=>{
        cy.log("test execution is completed")
    })
    it('stubing concept', () => {
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.wait('@EmployessStatus').then(({response})=>{
            expect(response.statusCode).to.equal(200)
            expect(response.body.data[0].id).to.equal(1)
            expect(response.body.data[0].name).to.equal("Freelance")
            expect(response.body.data[1].id).to.equal(2)
            }) 
        cy.wait('@getemployees').then(({response})=>{
         expect(response.body.data[0].firstName).to.equal('')
            expect(response.body.data[0].jobTitle.isDeleted).to.equal(false)
        })  
        cy.wait('@jobtittle').then(({response})=>{
            expect(response.body.data[0].id).to.equal(22)
            expect(response.body.data[0].title).to.equal("Account Assistant")
       })
       cy.wait("@Subunites").then(({response})=>{
         expect(response.body.data[0].name).to.equal("Finance")
         expect(response.body.data[0].description).to.equal("")
       })
    })
     })
  