Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the name as "ruchika"
    And User enter the email as "ruchika2024@gmail.com"
    And User enter the password as "5678976567"
    When User click on the login button
    Then Login should be success