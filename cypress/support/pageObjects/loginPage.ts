import { MenuBlock } from "./commonPageSectionBlocks/menuBlockPageObject";

export class LoginPage {
  private menuBlock = new MenuBlock();

  loginPageElements = {
    loginInput: () => cy.get("#loginFrm_loginname"),
    passwordInput: () => cy.get("#loginFrm_password"),
    loginButton: () => cy.get('button[title="Login"]'),
    alertMessage: () => cy.get(".alert"),
  };

  login(username: string, password: string) {
    this.loginPageElements.loginInput().clear().type(username);
    this.loginPageElements.passwordInput().clear().type(password);
    this.loginPageElements.loginButton().click();
  }

  assertErrorMessage(message: string) {
    this.loginPageElements.alertMessage().should("contain.text", message);
  }

  get menuActions() {
    return this.menuBlock;
  }
}
