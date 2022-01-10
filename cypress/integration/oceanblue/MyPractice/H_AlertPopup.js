/**
 * Popup n Alert
 */

/// <reference types="Cypress"/>
describe( "Popups n Alert", function(){

    //Drawback: we cannot verify text inside them
    //          and we cannot click cancel button in popup
    it("Alerts and Popup Autohandling", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Cypress will click "Ok" button inside Alert automatically
        cy.get("#alertbtn").click();

        //Cypress will click "Ok" button inside Popup automatically
        cy.get("#confirmbtn").click();
    })
      
    /**
     * 
     * "window:alert" is the event which get fired when any Alert get open in browser
     * 
     * So we are firing the same event through Cypress to get access to that event
     * 
     */
    it("Events - Alert", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Generate Alert 
        cy.get("#alertbtn").click();

        // Get Alert text by firing Events
        cy.on("window:alert", (str) => {
            //Mocha
            expect(str).equals("Hello , share this practice page and share your knowledge");
        })
    })

    
  
    it("Events - Popup", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Generate Popup 
        cy.get("#confirmbtn").click();

        // Get popup text by firing events
        cy.on("window:confirm", (str) => {
            //Mocha
            expect(str).equals("Hello , Are you sure you want to confirm?");
        })
    })
})