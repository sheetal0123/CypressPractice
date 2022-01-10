/**
 * 
 * FW Structure:
 * Page classes: In support folder
 * Test data: fixtures folder
 * Test Cases: integration folder
 * Utils Methods : support/commands.js file
 * Configs : cypress.json
 * 
 */

/// <reference types="Cypress"/>

import HomePage from "../../../support/PageClasses/HomePage";
import ProductPage from "../../../support/PageClasses/ProductPage";
import PurchasePage from "../../../support/PageClasses/PurchasePage";
import ShoppingCartPage from "../../../support/PageClasses/ShoppingCartPage";

describe("POM Test Suite", function(){

    before(() => {
        cy.log("I am in Before function")
        cy.fixture("example").then(function(d){   
            this.data = d;                       
        })
    })

    /**
     * Flow HomePage > ProductPage > ShoppingCartPage > PurchasePage 
     * 
     */
    it("Complete Shoppling Flow Using POM", function(){
        //Initialize Objects
        var homePage = new HomePage();
        var productPage = new ProductPage();
        var shoppingCartPage = new ShoppingCartPage();    
        var purchasePage = new PurchasePage(); 

        //Navigate to Homepage
        //Read from global var i.e cypress.json
        cy.visit(Cypress.env("url")+"/angularpractice/") 

        //Fill details in Home page
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()  //click shop tab

        //Select Products in Product Page and checkout items
        var dataArray = this.data.productNameList
        dataArray.forEach(data => 
            cy.selectProduct(data)    //method declared in commands.js
        );
        productPage.checkOutButton().click();

        //Shopping cart
        //Sum price of individual item in cart   
        var sum = 0;
        shoppingCartPage.getAmount().each(($el, index, $list) => {
            var rawText = $el.text(); //  ₹. 50000
            var arr = rawText.split(" ")
            var amount = arr[1].trim()
            sum = Number(sum) + Number(amount); // To convert String -> Int
        }).then(function(){
            cy.log("SUM >>>>>>> "+ sum)     // Cypress is async and hence we need then block
        }) 

        //Fetch cart's total price
        var totalAmount = 0;
        shoppingCartPage.getTotalAmount().then(function(element){
            const rawText = element.text();
            var arr = rawText.split(" ")
            var total = arr[1].trim()
            totalAmount = Number(total)
            cy.log("Total Amount>>>> "+totalAmount);    
        })

        //Verify if both int values are same or not
        expect(sum).to.equal(totalAmount);

        shoppingCartPage.getCheckoutButton().click();     
        

        //Purchase Page
        //Select Delivery Location 
        //Applicable to only current test from this line only, 
        //for global timeout update cypress.json
        Cypress.config('defaultCommandTimeout', 8000)  

        purchasePage.getDeliveryLocationTextBox().type("India");
        purchasePage.getSuggestedCountry().click(); //Suggestion taking too much time
        
        //purchasePage.getCheckbox().click();  //error: is being covered by another element:
        purchasePage.getCheckbox().click({force: true});

        purchasePage.getPurchaseButton().click();  
        
        //text verification
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })

    })

})