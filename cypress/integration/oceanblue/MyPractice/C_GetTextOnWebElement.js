/**
 * Ref:
 * https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-get-an-element-s-text-contents
 * 
 * Imp:
 * If we are using all cypress cmd then promise get auto resolved and we dont need to handle it
 *   cy.get(".search-keyword").type("ca");
 *   Here get() and type() are both cypress cmd and hence no need to handle promises   
 *  
 *   cy.get('.brand').text()
 *   Here text() is JQuery method, not a cypress method and hence we need to handle promise
 *   using then()      
 * 
 *   element.text()  
 *   $el.text()
 *   In both the above cmd promise has been resolved by then() and forEach() loop. Hence we can use text() directly   
 */


/// <reference types="Cypress"/>
describe( "Test Suite", function(){

    it("Usage of text function", function(){
        //Given
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //When
            //Style 1: Getting text directly on Webelement w/o resolving promise will not work in Cypress
            //const logoText = cy.get('.brand').text();
            //cy.log(logoText); 
            
            //Style 2: Using then() we can resolve promise
            cy.get(".brand").then(function(element){
                const logoText = element.text();
                cy.log(">>> "+logoText);    
            })

            //Style 3: Using forEach() we can resolve promise
            cy.get('.brand').each(($el, index, $list) => {
                const logoText = $el.text();
                cy.log(">>> "+logoText); 
            })

            //Assertion can use text keyword
            cy.get('.brand').should('have.text', 'GREENKART')
            cy.contains('.brand', 'GREENKART')

            //Some operation on text
            cy.get('.brand').should(($element) => {
                const text = $element.text()
                
                expect(text).to.match(/ART/)
                expect(text).to.include('GREENKART')
                expect(text).not.to.include('REDKART')
              })
    })
        
})