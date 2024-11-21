Feature: Login Test

  Background:
    Given Going to the application
    And Click on the login link

  Scenario: Login successfully
    And Enter the username as "Ruchika20"
    And Enter the password as "Ruchika20"
    When Click on the login button
    Then Successfully Login

  Scenario: Login not successfully
    Given Enter the username as "koushik"
    Given Enter the password as "Passkoushik"
    When Click on the login button
    But Not Successfully Login

  