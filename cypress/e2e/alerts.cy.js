beforeEach(() => {
  
  cy.on("uncaught:exception", () => {
    return false;
  });
});

describe("alert functions", () => {
  it("qademo", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#timerAlertButton").click();
    cy.on("windows:alert", () => {
      Expect().should("You clicked a button");
      return true;
    });
  });
})
it("confirm demo", () => {
    cy.visit("https://demoqa.com/alerts");
  cy.get("#confirmButton").click();
  cy.on("window:confirm", () => {
    Expect().should("Do you confirm action?");
    return true;
  });
})
  it("click on  confirm box ok", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#confirmButton").click();
    cy.on("window:confirm", () => {
      Expect().should("Do you confirm action?");
      return true;
    });
  });
  it("click on  confirm box cancel", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#confirmButton").click();
    cy.on("window:confirm", () => {
      Expect().should("Do you confirm action?");
      return false;
    });
  });
  it.only("prompt box ok", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#promtButton").click()
    cy.window().then(($win)=>{
    cy.stub($win,"prompt").returns("manju")
    return truee
    
})
    })
    it.only("prompt box cancel", () => {
        cy.visit("https://demoqa.com/alerts");
        cy.contains("").click()
        cy.window().then(($win)=>{
        cy.stub($win,"prompt").callsFake(()=> null)

        
        
    })
        })

