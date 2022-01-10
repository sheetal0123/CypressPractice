
/**
 *  Home Page : https://rahulshettyacademy.com/angularpractice/shop
 *  
 */

 class PurchasePage
 {
 
    getDeliveryLocationTextBox()
    {
        return cy.get('#country')
    }

    getSuggestedCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckbox()
    {
        //first locator working w/o force click
        //return cy.get('div.container app-checkout.row div:nth-child(3) div.checkbox.checkbox-primary:nth-child(2) > label:nth-child(2)')
        return cy.get('#checkbox2')  // it will require force click
    }

    getPurchaseButton(){
        return cy.get("input[type='submit']")
    }
 
}

 export default PurchasePage;
 
