/**
 * Dropdown
 */

/// <reference types="Cypress"/>
describe( "Test Various Webelements", function(){

    it("Invisible Elements", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        
        cy.get('#displayed-text').should("be.visible")
        cy.wait(2000)
        cy.get('#hide-textbox').click();
        cy.wait(2000)
        cy.get('#displayed-text').should("not.be.visible")
        cy.wait(2000)
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should("be.visible")
        
    })
      
  
})