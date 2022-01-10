
/**
 *  Home Page : https://rahulshettyacademy.com/angularpractice/shop
 *  
 */

 class ShoppingCartPage
 {
 
    getAmount()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalAmount()
    {
        return cy.get('h3 > strong')
    }

    getCheckoutButton()
    {
        return cy.contains("Checkout")
    }
 
}

 export default ShoppingCartPage;
 
