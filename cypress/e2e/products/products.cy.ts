import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductsPage } from "../../support/pageObjects/productsPage";
import { ShoppingCartPage } from "../../support/pageObjects/shoppingCartPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const shoppingCartPage = new ShoppingCartPage();

beforeEach(() => {
  cy.loginToShopping(Cypress.env("username"), Cypress.env("password"));
});

describe("Test products functionality", () => {
  it("delete a product from shopping cart", () => {
    loginPage.menuActions.menuBlockElemenets
      .hairCareButton()
      .click({ force: true });

    productsPage.productsPageElemenets.shampooButton().click({ force: true });
    productsPage.productsPageElemenets
      .eauParfumeLinkText()
      .click({ force: true });
    productsPage.productsPageElemenets.productQuantityInput().clear().type("3");
    productsPage.productsPageElemenets.addToCartButton().click();
    cy.contains("Eau Parfumee au The Vert Shampoo");

    shoppingCartPage.shoppingCartPageElemenets.deleteButton().click();
    cy.contains("Your shopping cart is empty!");
  });
});
