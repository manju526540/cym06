import login from "../pageobjectmodule/login.po";
import logindata from "../fixtures/login.json";
import dashboard from "../pageobjectmodule/dashbord.po";
describe("orange hrm support folder", () => {
  it("click on support folder", () => {
    cy.visit("/");
    cy.get(login.userNameInput()).type(logindata.username);
    cy.get(login.passWordInput()).type(logindata.password);
    cy.get(login.logInBtn()).click();
    cy.contains(dashboard.PimMenuiteam()).should("be.visible");
    cy.get('p[class="oxd-userdropdown-name"]').click();
    cy.get("a").contains("Support").click();
  });
});
