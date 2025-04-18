import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductsPage } from "../../support/pageObjects/productsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

When("I navigate to home page", () => {
  loginPage.menuActions.menuBlockElemenets.homeButton().click();
});

When("I select the first Skin Sheen product", () => {
  productsPage.productsPageElemenets.skinSheenProduct().first().click();
});

When("I ensure the product is not in the wishlist", () => {
  productsPage.productsPageElemenets
    .removeFromWichListButton()
    .then(($el) => {
      if ($el.length > 0 && $el.is(":visible")) {
        cy.wrap($el).click();
      }
    });
});

When("I add the product to wishlist", () => {
  productsPage.productsPageElemenets.addToWishListButton().click();
});

Then("the remove from wishlist button should be visible", () => {
  productsPage.productsPageElemenets
    .removeFromWichListButton()
    .should("be.visible");
});

Then("the print button should be visible", () => {
  productsPage.productsPageElemenets
    .printButton()
    .should("be.visible");
});

When("I remove the product from wishlist", () => {
  productsPage.productsPageElemenets.removeFromWichListButton().click();
});

Then("the add to wishlist button should be visible", () => {
  productsPage.productsPageElemenets
    .addToWishListButton()
    .should("be.visible");
});