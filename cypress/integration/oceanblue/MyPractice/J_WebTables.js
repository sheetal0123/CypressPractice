/**
 * 
 * 
 */

/// <reference types="Cypress"/>
describe( "Web tables", function(){

    it("Tab", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get("table[name='courses'] > tbody tr td:nth-child(2)").as("column2")
        cy.get("@column2").each(($el, index, $list) => {
            
            //const textVal = $el.text();
            var textVal = $el.text();
            
            if(textVal.includes("SoapUI")){
                //cy.get("@column2").eq(index).next().text() || text is JQuery and need to resolve
                cy.get("@column2").eq(index).next().then(function(price){
                    var priceText = price.text();
                    expect(priceText).to.equal('35');
                })
            }    

               
         }) 
    })
      
})