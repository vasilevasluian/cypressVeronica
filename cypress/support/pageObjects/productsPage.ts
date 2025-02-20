import { MenuBlock } from "./commonPageSectionBlocks/menuBlockPageObject";

export class ProductsPage {
  private menuBlock = new MenuBlock();

  productsPageElemenets = {
    shampooButton: () => cy.get(":nth-child(2) > .mt10"),
    eauParfumeLinkText: () =>
      cy.get('[title="Eau Parfumee au The Vert Shampoo"]'),
    productQuantityInput: () => cy.get("#product_quantity"),
    addToCartButton: () => cy.get(".cart"),
      addToWishListButton: () => cy.get('.wishlist_add'),
    removeFromWichListButton: () => cy.get('.wishlist_remove'),
    skinSheenProduct: () => cy.get('[title="Skinsheen Bronzer Stick"]'),
  };

  get menuActions() {
    return this.menuBlock;
  }
}
