import { MenuBlock } from "./commonPageSectionBlocks/menuBlockPageObject";

export class ShoppingCartPage {
  private menuBlock = new MenuBlock();

  shoppingCartPageElemenets = {
    deleteButton: () => cy.get('.fa.fa-trash-o.fa-fw'),
  };

  get menuActions() {
    return this.menuBlock;
  }
}
