/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

    /**
     * Intercept existing call and modify request only
     * cy.intercept(method, url, routeHandler)
     * 
     * Problem Stmt: Request need to be modified
     * ?AuthorName=shetty    = 629 books available
     * ?AuthorName=malhotra  = 1 book available
     * 
     * Also in production with one user account second user data cannot be accessed 
     * This negative scenario can be tested and we should get 403 error code
     */
    it("Intercept GET Request", function(){
        //Given
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        //Make Intercept request modified reference
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>
            {
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
                req.continue((res)=>
                {
                    expect(res.statusCode).to.equal(200) 
                })
            }
        ).as("dummyUrl")
    
        //Click Virtual library button    
        cy.get("button[class='btn btn-primary']").click()
    
        //Wait for Req to fire
        cy.wait('@dummyUrl')
    
        //Verification
        cy.get('p').should('have.text','Oops only 1 Book available')
        cy.get("tbody tr").should("have.length", 1)
    })

})