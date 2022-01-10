/**
 *  Fixtures:
 *  Cypress have default access to fixture folder.
 *  All test data should be inside fixture folder
 *  
 * 
 * 
 */


/// <reference types="Cypress"/>
describe( "Complete Test Suite or Test Class", function(){

    //Reading complete data from example.json file
    before(() => {
        cy.log("I am in Before function")
        cy.fixture("example").then(function(d){   //d is local variable
            this.data = d;                        //data become global variable
        })
    })
    
    beforeEach(() => {
        cy.log("I am in Before Each function")
    })

    it("Use Data From Fixtures", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("form div:nth-child(1) input").type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.data.gender)
    })

    it("Basic Test", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("form div:nth-child(1) input").type("Red")
        cy.get("#exampleFormControlSelect1").select("Male")
    })

    
    
    }
)