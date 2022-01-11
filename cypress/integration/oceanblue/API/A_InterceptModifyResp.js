/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

    /**
     * Refer: https://docs.cypress.io/api/commands/intercept#Syntax
     * 
     * Intercept existing call and modify response
     * cy.intercept({request_to_intercept},{response_to_mock});
     * cy.intercept(routeMatcher, staticResponse)
     * 
     * Problem Stmt: Lot of records coming in response and we want to test with only one records
     * Earlier we used to solve via external tool liek Fidler, Burp etc
     * 
     * https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty
     * https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra
     * 
     */
    it("Intercept GET Request", function(){
        //Given
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        //Make Intercept reference variable
        cy.intercept(
            {
                method : 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode : 200,
                body : [{
                       "book_name": "RestAssured with Java",
                       "isbn": "RSU",
                       "aisle": "2301"    
                        }]
            }
        ).as('bookretrievals')

        //Click Virtual library button    
        cy.get("button[class='btn btn-primary']").click()

        //Wait for request to fire
        cy.wait('@bookretrievals')

        //Verification
        cy.get('p').should('have.text','Oops only 1 Book available')
        cy.get("tbody tr").should("have.length", 1)
    })

})