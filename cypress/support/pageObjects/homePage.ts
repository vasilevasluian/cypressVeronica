import { MenuBlock } from "./commonPageSectionBlocks/menuBlockPageObject";

export class HomePage {
  private menuBlock = new MenuBlock();

  homePageElemenets = {
    loginOrRegisterButton: () => cy.get("#customer_menu_top"),
  };

  get menuActions() {
    return this.menuBlock;
  }
}
