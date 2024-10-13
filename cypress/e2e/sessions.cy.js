import login from "../pageobject/loginpage.po.cy";
describe("sessions practice methods", () => {
  beforeEach(() => {
    cy.session("loginpage", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(login.loginusername()).type("admin");
      cy.get(login.loginpassword()).type("admin123");
      cy.get(login.submitbutton()).click();
    });
    it("user can add the employees", () => {
      cy.visit("/web/index.php/pim/addEmployee");
      cy.addemployee("monika", "hs");
    });

    it("user can add the job tittle", () => {
      cy.visit("/web/index.php/admin/saveJobTitle");
      var r = (Math.random() + 1).toString(36).substring(7);
      cy.get("input[class='oxd-input oxd-input--active']")
        .eq(2)
        .type("quality enginneer" + r);
      cy.contains("button[type='submit']").click();
    });
  });
});