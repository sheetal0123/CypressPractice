Feature: End to end Ecommerce validation

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |name | gender |
    |Blue | Male   |
    Then validate the forms behaviour

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I go to Shopping Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou





