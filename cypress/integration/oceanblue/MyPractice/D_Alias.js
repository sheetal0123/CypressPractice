/**
 * #Topics:
 * Alias (variables) : Helpful in case locators get updated time to time.
 * Logging
 * 
 */

/// <reference types="Cypress"/>
describe( "Test Suite", function(){

    it("Without Alias", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000)
        cy.get(".products").find(".product").should("have.length", 4)
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    })
      
    it("With Alias", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000)
        
        //Alias (variable)
        cy.get(".products").as("productLocator")

        //Use alias everywhere
        cy.get("@productLocator").find(".product").should("have.length", 4)
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();
    })


    it("Logging", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        //This will print in Browser > DevTools > Console
        console.log("I am not a cypress cmd");

        //This will print in Browser > Cypress's TC Logs (Test Runner)
        cy.log("I am a cypress cmd")

    })

})