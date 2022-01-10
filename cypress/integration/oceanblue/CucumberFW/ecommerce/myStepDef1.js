/// <reference types="Cypress"/>
import HomePage from "../../../../support/PageClasses/HomePage";
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

//Initialize Objects
var homePage = new HomePage
let name;

Given('I open ECommerce Page', ()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

When('I fill the form details', function(dataTable)
{
    //Fill details in Home page
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])      // row col
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behaviour', ()=>
{
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')    
})

