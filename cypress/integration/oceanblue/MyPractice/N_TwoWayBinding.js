/**
 * 
 *  
 */



/// <reference types="Cypress"/>
describe( "Two Way", function(){

    //Entered value is not visible in DOM
    //Text typed in one element is visible in another text fields
    it("Two way element", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
            cy.get("form div:nth-child(1) input").type("Red")
            cy.get(":nth-child(4) > .ng-untouched").should("have.value","Red")            
    })
    
    it("Fetch Attribute Value Style 2", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
            cy.get("form div:nth-child(1) input").type("Red")
            cy.get("form div:nth-child(1) input").should("have.attr","minlength","2")
    })


})