
/**
 *  Home Page : https://rahulshettyacademy.com/angularpractice/
 *  Very imp to export page
 */

class HomePage
{

    getEditBox()
    {
        return cy.get("form div:nth-child(1) input");
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')

    }

    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return  cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;
