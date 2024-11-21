Feature: Add products to cart

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario Outline: Authenticated Users - Add to cart
    And Enter the username as "Ruchika20"
    And Enter the password as "Ruchika20"
    And Click on the login button
    When User search for a "Roomies"
    And user add the book to the cart
    Then the cart badge should get updated

