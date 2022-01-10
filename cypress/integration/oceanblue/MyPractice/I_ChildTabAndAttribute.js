/**
 * New Tab
 * - Cypress does not support new tab automation
 * - Target attribute make sure link open in new tab
 *      <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>
 * 
 * Solution 1:
 * - Cypress support JQuery. JQuery can edit the DOM easily. 
 * - If we remove 'target' attribute then link will open in same Tab and can be automated with Cypress
 *   https://api.jquery.com/removeattr/
 * 
 * invoke
 * With invoke we can call JQuery functions in Cypress
 * https://docs.cypress.io/api/commands/invoke#Function-with-Arguments

 * 
 * Solution 2:
 * - fetch href and open url
 * 
 * 
 * 
 */

/// <reference types="Cypress"/>
describe( "Tab Handling", function(){

    it("Tab Style 1", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Modify DOM 
        cy.get("#opentab").invoke("removeAttr","target").click();
        
        //Assert current URL
        cy.url().should("include","#/index")
        cy.wait(2000)

        //Navigate back
        cy.go("back");
    })
      

    it("Tab Style 2", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/")

        //Fetch Attribute Value
        cy.get("#opentab").then(function(el){
            var hrefValue = el.prop("href");    //Style 1
            cy.log("Href: "+ hrefValue);
            cy.visit(hrefValue);
        })
        
        //Assert current URL
        cy.url().should("include","https://www.rahulshettyacademy.com/#/index")

        //Navigate back
        cy.go("back");
        cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Fetch Attribute Value Style 2", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
            cy.get("form div:nth-child(1) input").type("Red")
            cy.get("form div:nth-child(1) input").should("have.attr","minlength","2")
    })



})