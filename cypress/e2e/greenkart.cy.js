describe('greenkart test cases', () => {
    it('add kart', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('input[value="radio1"]').check()
      cy.get('input[value="radio2"]').check()
      cy.get('input[placeholder="Type to Select Countries"]').type("india")
      cy.get("#dropdown-class-example").select("Option1")
      cy.get('#checkBoxOption1').check()
    })
    it.only('add kart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.xpath('(//div[@class="product-action"])[1]').click()
        cy.xpath('(//div[@class="product-action"])[2]').click()
        cy.get('img[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()

  })
})  