/**
 * Custom Method need to be write in Support > commands.js
 * No need to import, create objects etc
 * 
 */

/// <reference types="Cypress"/>
describe( "Complete Test Suite", function(){

    before(() => {
        cy.log("I am in Before function")
        cy.fixture("example").then(function(d){   
            this.data = d;                       
        })
    })

/*
    it("Basic Method", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(":nth-child(2) > .nav-link").click();
        cy.get("h4.card-title").each((ele, index, $list) => {
            var itemTitle = ele.text();
            
            if(itemTitle.includes("Blackberry")){
                cy.log(">>>"+itemTitle)
                cy.get("button.btn.btn-info").eq(index).click();
            }       
        }) 
        
    })
   
    
    it("Calling Custom Methods", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(":nth-child(2) > .nav-link").click();

        cy.selectProduct("Nokia Edge");
        cy.selectProduct("Blackberry");
        cy.wait(2000)
    })

*/

    it("Calling Custom Methods with Data", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(":nth-child(2) > .nav-link").click();

        //Fetch data from before() method
        //var dataArray = ["Blackberry","Nokia Edge"]  //working
        var dataArray = this.data.productNameList
        
        //Style1
        dataArray.forEach(data => 
            cy.selectProduct(data)
        );

        //cy.pause() // pause for debuging
        
        //Style2    
        dataArray.forEach(function(data){
            cy.selectProduct(data);
        });

        cy.wait(2000)
    })

})