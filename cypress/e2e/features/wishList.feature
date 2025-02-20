Feature: Wishlist Functionality
As a logged in user
I want to manage my wishlist
So that I can track products I'm interested in

Background:
  Given I am logged in with valid credentials

Scenario: Add and remove a product from wishlist
  When I navigate to home page
  And I select the first Skin Sheen product
  And I ensure the product is not in the wishlist
  And I add the product to wishlist
  Then the remove from wishlist button should be visible
  When I remove the product from wishlist
  Then the add to wishlist button should be visible