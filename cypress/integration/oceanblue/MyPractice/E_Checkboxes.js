/**
 * #Topics:
 * Handling various WebElements
 * 
 * Checkbox:
 *  cy.get("locator").check().should("be.checked").and("have.value","option1")
 *  click() can also be used in place of check()
 *  when we check some behaviour then we use should("be.")
 *  when we compare something then we use should("have.")
 * 
 * 
 */

/// <reference types="Cypress"/>
describe( "Test Various Webelements", function(){

    
    it("Checkboxes", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Check Single Checkbox
        //cy.get("#checkBoxOption1").click().should("be.checked"); //working
        cy.get('#checkBoxOption1').check().should("be.checked").and("have.value","option1");
        cy.wait(2000)
        cy.get('#checkBoxOption1').uncheck().should("not.be.checked");

        //Check All Checkboxes
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check().should("be.checked");
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck().should("not.be.checked");
        
        
        //Check Multiple Checkboxes
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['option2','option3']).should("be.checked");
    })
      

    it("Radio Button", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Check Single Checkbox
        cy.get('input[value="radio2"]').check().should("be.checked").and("have.value","radio2");

    })


    it("Select particular Radio Button Only Based on text", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Check Single Radio Button
        cy.get('div[id="radio-btn-example"]').find("fieldset > label > input").each(($el, index, $list) => {
            
           var valueAttribute = $el.prop("value");

            if(valueAttribute === "radio2"){
                cy.log("Check correct radio button")
                cy.wrap($el).check();
            }

        })

    })


    it("Verify if Radio Button is disabled", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
            cy.get(":nth-child(7) > :nth-child(4) > .form-check-input").should("be.disabled")
            cy.get("#inlineRadio3").should("be.disabled")

            
    })

   
})