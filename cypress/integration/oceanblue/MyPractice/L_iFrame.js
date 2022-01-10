/**
 * IFrame
 * Need to install before using iframe
 * npm install -D cypress-iframe
 * 
 * 
 * 
 */

/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>
import 'cypress-iframe'

describe("iFrame Suite", function(){

    it("iframe example", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe")
        //cy.iframe().find("a[href='#/mentorship']").eq(0).click();  //style 1
        cy.iframe().find("a[href*='mentorship']").eq(0).click();     //style 2 

        //Verify h1 counts, css class name is : pricing-title text-white ls-1
        //Using regex to find all class name    
        cy.iframe().find("h1[class*='pricing-title']").should("have.length","2");
    })

       
})