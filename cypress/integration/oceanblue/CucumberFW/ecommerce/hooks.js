/**
 * Mocha Hooks
 * Run before every scenario
 * 
 * Mocha still not support fat arrow =>
 * Hence step def method cannot use fat arrow in case 'data' is getting used in it 
 * e.g. 
 * When('I add items to Cart', ()=>             //Error: Cannot read properties 'data'    
 * When('I add items to Cart', function ()
 */

beforeEach(() =>
{
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
});