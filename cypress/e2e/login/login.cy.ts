import { HomePage } from "../../support/pageObjects/homePage";
import { LoginPage } from "../../support/pageObjects/loginPage";

beforeEach(() => {
  cy.visit("/");
});

const homePage = new HomePage();
const loginPage = new LoginPage();

describe("Test login functionality", () => {
  it("login with valid credentials", () => {
    homePage.homePageElemenets.loginOrRegisterButton().click();
    cy.screenshot();
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
    homePage.homePageElemenets.loginOrRegisterButton().contains("Welcome back");
  });

  it("login with INvalid credentials", () => {
    homePage.homePageElemenets.loginOrRegisterButton().click();
    loginPage.login("invalidUsername", "InvalidPassword2025");
    loginPage.assertErrorMessage(
      "Error: Incorrect login or password provided."
    );
  });
});
