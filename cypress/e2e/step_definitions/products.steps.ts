import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductsPage } from "../../support/pageObjects/productsPage";
import { ShoppingCartPage } from "../../support/pageObjects/shoppingCartPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const shoppingCartPage = new ShoppingCartPage();

Given("I am logged in with valid credentials", () => {
  cy.loginToShopping(Cypress.env("username"), Cypress.env("password"));
});

When("I navigate to Hair Care section", () => {
  loginPage.menuActions.menuBlockElemenets
    .hairCareButton()
    .click({ force: true });
});

When("I click on Shampoo category", () => {
  productsPage.productsPageElemenets.shampooButton().click({ force: true });
});

When("I click on Skincare category", () => {
  productsPage.menuActions.menuBlockElemenets.skinCareButton().click({ force: true });
});

When("I select another number of elements per page", () => {
  productsPage.productsPageElemenets.productsPerPageDropDown().select('30');
});

Then("Selected option should be displayed", () => {
  productsPage.productsPageElemenets.productsPerPageDropDown().should('have.value', '30');
});

When("I select {string}", (productName: string) => {
  productsPage.productsPageElemenets
    .eauParfumeLinkText()
    .click({ force: true });
});

When("I select absolute Eye product", () => {
  productsPage.productsPageElemenets
    .absoluteEyeLinkText()
    .click({ force: true });
});

When("I set product quantity to {string}", (quantity: string) => {
  productsPage.productsPageElemenets.productQuantityInput().clear().type(quantity);
});

When("I add the product to cart", () => {
  productsPage.productsPageElemenets.addToCartButton().click();
});

Then("I should see {string} in the cart", (productName: string) => {
  cy.contains(productName);
});

Then("Add to cart button should be visible", () => {
  productsPage.productsPageElemenets.addToCartButton().should('be.visible')
});

Then("Add to wish list button should be visible", () => {
  cy.contains('Add to wish list')
  productsPage.productsPageElemenets.addToCartButton().should('be.visible')
});

When("I delete the product from cart", () => {
  shoppingCartPage.shoppingCartPageElemenets.deleteButton().click();
});

Then("I should see message {string}", (message: string) => {
  cy.contains(message);
});