Feature: Wishlist Functionality
As a logged in user
I want to manage my wishlist
So that I can track products I'm interested in

Background:
  Given I am logged in with valid credentials

Scenario: Add a product to wishlist
  When I navigate to home page
  And I select the first Skin Sheen product
  And I ensure the product is not in the wishlist
  And I add the product to wishlist
  Then the remove from wishlist button should be visible

Scenario: Add and remove a product from wishlist
  When I navigate to home page
  And I select the first Skin Sheen product
  And I ensure the product is not in the wishlist
  And I add the product to wishlist
  Then the remove from wishlist button should be visible
  When I remove the product from wishlist
  Then the add to wishlist button should be visible

Scenario: Print button should remain visible after adding product to wish list
  When I navigate to home page
  And I select the first Skin Sheen product
  And I ensure the product is not in the wishlist
  And I add the product to wishlist
  Then the print button should be visible