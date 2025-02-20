import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductsPage } from "../../support/pageObjects/productsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

beforeEach(() => {
  cy.loginToShopping(Cypress.env("username"), Cypress.env("password"));
});

describe("Test wish list functionality", () => {
  it("add and remove a product to the wish list", () => {
    loginPage.menuActions.menuBlockElemenets.homeButton().click();
    productsPage.productsPageElemenets.skinSheenProduct().first().click();
    //remove element from wich list if exists
    productsPage.productsPageElemenets
      .removeFromWichListButton()
      .then(($el) => {
        if ($el.length > 0 && $el.is(":visible")) {
          cy.wrap($el).click();
        }
      });

    productsPage.productsPageElemenets.addToWishListButton().click();
    productsPage.productsPageElemenets
      .removeFromWichListButton()
      .should("be.visible");
    productsPage.productsPageElemenets.removeFromWichListButton().click();
    productsPage.productsPageElemenets
      .addToWishListButton()
      .should("be.visible");
  });
});
