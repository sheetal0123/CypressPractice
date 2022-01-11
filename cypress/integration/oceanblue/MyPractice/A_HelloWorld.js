/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

        it("Hello World One", function(){
                cy.visit("https://es.wikipedia.org/wiki/Wiki");
        })

        it("Hello World Two", function(){
            cy.visit("https://es.yahoo.com/?p=us");
        })

    }
)