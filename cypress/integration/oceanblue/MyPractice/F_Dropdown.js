/**
 * Dropdown
 */

/// <reference types="Cypress"/>
describe( "Test Various Webelements", function(){

    it("Static Dropdown", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Static Dropdown
        cy.get('#dropdown-class-example').select("option2").should("have.value","option2");
        cy.wait(2000)

    })
      


    it("Dynamic Dropdown", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Dynamic Dropdown
        cy.get('#autocomplete').type("ind");
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === "India" ){
                
                cy.wrap($el).click();

            }       
        })   
        
        //Verification
        cy.get('#autocomplete').should("have.value","India");
    })
  
})