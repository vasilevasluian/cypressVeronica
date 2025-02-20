// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "./pageObjects/loginPage";
import { HomePage } from "./pageObjects/homePage";

declare global {
  namespace Cypress {
    interface Chainable {
      loginToShopping(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add(
  "loginToShopping",
  (username: string, password: string) => {
    let homePage = new HomePage();
    let loginPage = new LoginPage();
    cy.visit("/");
    homePage.homePageElemenets.loginOrRegisterButton().click();
    loginPage.login(username, password);
    homePage.homePageElemenets.loginOrRegisterButton().contains("Welcome back");
  }
);

export {};
