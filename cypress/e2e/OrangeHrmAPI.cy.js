describe("Api test cases", () => {
  it("OrangeHrm 1st test cases", () => {
    cy.request({
      method: "GET",
      url:
        "https://opensource-demo.orangehrmlive.com/" +
        Cypress.env("getemployees"),
      headers: {
        cookie: Cypress.env("API cokie"),
        referer:
          "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        host: "opensource-demo.orangehrmlive.com",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.writeFile("cypress/fixtures/APIresponse.txt", response);
      // expect(response.body.data[0].empNumber).to.equal(186)
      // expect(response.body.data[0].firstName).to.equal("123445")
      // expect(response.body.data[2].firstName).to.equal("A8DCo")
    });
})

    it("Orange HRM 2nd test cases", () => {
      cy.request({
        method: "POST",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
        headers: {
          cookie: Cypress.env("API cokie"),
          host: "opensource-demo.orangehrmlive.com",
          origin: "https://opensource-demo.orangehrmlive.com",
          referer:
            "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
        },
        body: {
          firstName: "nanjunda",
          middleName: "",
          lastName: "Nv",
          empPicture: null,
          employeeId: "0394",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    
});
  })
