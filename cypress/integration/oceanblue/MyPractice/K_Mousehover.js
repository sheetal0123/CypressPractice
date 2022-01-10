/**
 * Mouse Hover
 * Cypress dont support this feature, hence we need to use JQuery
 * show() method: https://www.w3schools.com/jquery/eff_show.asp
 */

/// <reference types="Cypress"/>
describe( "Mouse Hover", function(){

    it("MouseHvr", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click();
        
        //verification 
        cy.url().should('include','top')
    })

    //https://docs.cypress.io/api/commands/click#Options
    it("Hidden Element", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Enable hidden element 'Top' and then click it
        //cy.contains("Top").click(); // Will not work on hidden elements
        cy.contains("Top").click({force : true});
        
        //verification 
        cy.url().should('include','top')
    })
      
})