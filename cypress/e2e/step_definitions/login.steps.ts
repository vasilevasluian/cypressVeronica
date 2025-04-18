import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../support/pageObjects/homePage";
import { LoginPage } from "../../support/pageObjects/loginPage";
// import { HomePage } from "../../../support/pageObjects/homePage";
// import { LoginPage } from "../../../support/pageObjects/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I click on the login or register button", () => {
  homePage.homePageElemenets.loginOrRegisterButton().click();
});

When("I enter {string} as username", (username: string) => {
  loginPage.loginPageElements.loginInput().type(username);
});

When("I enter {string} as password", (password: string) => {
  loginPage.loginPageElements.passwordInput().type(password);
});

When("I click the login button", () => {
  loginPage.loginPageElements.loginButton().click();
});

Then("the login button should contain text {string}", (text: string) => {
  homePage.homePageElemenets.loginOrRegisterButton().contains(text);
});

Then("I take a screenshot", () => {
  cy.screenshot();
});

Then("I should see error message {string}", (errorMessage: string) => {
  loginPage.assertErrorMessage(errorMessage);
});

When("I enter valid credentials", () => {
  loginPage.loginPageElements.loginInput().type(Cypress.env("username"));
  loginPage.loginPageElements.passwordInput().type(Cypress.env("password"));
});
