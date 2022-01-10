/**
 * To get complete list of commands https://docs.cypress.io/api/commands/and#Syntax
 * 
 * ///reference types="Cypress" : required to get auto suggestion
 * visit() : required to open browser (selenium: driver.get)
 * get() : required to get control of element (selenium: driver.findElements)
 * should() : Chai Assertion
 * :visible : To get only visible element.    csslocator:visible
 * find("locator") : To get desendent/child of a particular element. get("parent").find("child")
 * eq(index) : To get element based on index. find("").eq(2)
 * contains("text") : To check for 'text' inside element. Best method to click any element
 */



/// <reference types="Cypress"/>
describe( "First Test Suite", function(){

    it("First Test Case", function(){
        //Given
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //When
            cy.get(".search-keyword").type("ca");
            
        //Then
            cy.wait(2000)
            //directly get child control , here one child is invisible and hence we need to use :visible
            cy.get(".product:visible").should("have.length", 4)
            //If we get parent control and then find its child and above problem can be solved 
            cy.get(".products").find(".product").should("have.length", 4)

        //When - Click Add to Cart
            //Style 1: To get particular item based on its index and click using contains()
            //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

            //Style 2: To click based on its name, irrespective of index
            cy.get(".products").find(".product").each(($el, index, $list) => {

                    //imp: text() can be used inside foreach loop
                    const itemText = $el.find("h4.product-name").text() 

                    //includes = substring in Java
                    if (itemText.includes("Cashews")) { 
                        cy.wrap($el).contains("ADD TO CART").click()  
                        //cy.wrap($el).find("button").click()
                   }

            })
    })
      
    

    it("Complete Flow", function(){
        //Given
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //When
            cy.get(".search-keyword").type("ca");
            
        //Then
            cy.wait(2000)
            cy.get(".products").find(".product").should("have.length", 4)

        //When - Click Add to Cart
            cy.get(".products").find(".product").each(($el, index, $list) => {

                    //imp: text() can be used inside foreach loop
                    const itemText = $el.find("h4.product-name").text() 
                    
                    //includes = substring in Java
                    if (itemText.includes("Cashews")) { 
                        cy.wrap($el).contains("ADD TO CART").click()  
                        //cy.wrap($el).find("button").click()
                    }

            })
        
        //Then - Assert Item = 1
            cy.get("div.container div.container div.cart div.cart-info:nth-child(4) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) > td:nth-child(3)").should('have.text', '1')

        //When : Different way to click    
            //cy.get('a.cart-icon').click();
            cy.get('.cart-icon > img').click();

            //cy.get(".cart-preview").find("button").click();
            cy.contains("PROCEED TO CHECKOUT").click();    

            //cy.get(':nth-child(14)').click();
            cy.contains("Place Order").click();
            
            //Select Dropdown 
            cy.get('select').select('India')
            
            //Select Checkbox
            cy.get('.chkAgree').click()

            //Click Proceed button
            cy.contains("Proceed").click();

        //Then    
            //Verify Thankyou msg 
            cy.get(".wrapperTwo > span").should("have.text", "Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!")

    })


})