/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

    /**
     * Intercept existing call and fetch response data
     * cy.intercept({request_to_intercept});
     * cy.intercept(routeMatcher)
     * 
     * Problem Stmt: Lot of records coming in response and we want to test with only one records
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
            }
        ).as('requestRef')

        //Click Virtual library button    
        cy.get("button[class='btn btn-primary']").click()

        //Wait for request
        cy.wait('@requestRef').should(({request,response})=>
        {
         //API Response Data Verification   
         //cy.get('tbody tr') = 629 && response.body.length = 629
         cy.get('tbody tr').should('have.length',response.body.length)
        })

        //UI Verification
        cy.get("tbody tr").should("have.length", 629)
    })

})