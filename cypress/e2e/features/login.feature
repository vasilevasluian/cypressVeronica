Feature: Login Functionality
As a user
I want to be able to log in to the application
So that I can access my account

Background:
  Given I am on the home page

Scenario: Successful login with valid credentials
  When I click on the login or register button
  And I enter "vasilevasluian" as username
  And I enter "8@L3qQhs@NtK8y8" as password
  And I click the login button
  Then the login button should contain text "Welcome back"
  And I take a screenshot

Scenario: Failed login with invalid credentials
  When I click on the login or register button
  And I enter "invalidUsername" as username
  And I enter "InvalidPassword2025" as password
  And I click the login button
  Then I should see error message "Error: Incorrect login or password provided."