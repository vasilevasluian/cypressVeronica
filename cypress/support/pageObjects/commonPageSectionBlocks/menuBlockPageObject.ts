export class MenuBlock {
  menuBlockElemenets = {
    hairCareButton: () =>
      cy.get(
        '[href="https://automationteststore.com/index.php?rt=product/category&path=52"]'
      ),
    homeButton: () =>
      cy.get(
        '.nav-pills.categorymenu [href="https://automationteststore.com/"]'
      ),
    skinCareButton: () => cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]')
  };
}
