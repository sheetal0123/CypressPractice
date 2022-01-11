/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

    /**
     * 
     * In general we use Cypress API to get help for UI tests
     * May not be useful for full API automation like Rest Assured
     * 
     * https://docs.cypress.io/api/commands/request#Method-URL-and-Body
     * https://docs.cypress.io/api/commands/request#Syntax
     * cy.request(method, url, body)
     */
    it("API Request", function(){
        //Given
       
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            //req body
            "name":"Learn Appium Automation with Java",
            "isbn":"bcggsss",
            "aisle":"22s7",
            "author":"John foe"
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        })
    
    })

})