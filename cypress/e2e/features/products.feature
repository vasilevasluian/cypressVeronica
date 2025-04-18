Feature: Shopping Cart Functionality
As a logged in user
I want to manage products in my shopping cart
So that I can control my purchases

Background:
  Given I am logged in with valid credentials

Scenario: Remove product from shopping cart
  When I navigate to Hair Care section
  And I click on Shampoo category
  And I select "Eau Parfumee au The Vert Shampoo"
  And I set product quantity to "3"
  And I add the product to cart
  Then I should see "Eau Parfumee au The Vert Shampoo" in the cart
  When I delete the product from cart
  Then I should see message "Your shopping cart is empty!"

Scenario: Check add to cart button visibility
  When I navigate to Hair Care section
  And I click on Skincare category
  And I select absolute Eye product
  Then Add to cart button should be visible

Scenario: Check add to wish list button visibility
  When I navigate to Hair Care section
  And I click on Skincare category
  And I select absolute Eye product
  Then Add to wish list button should be visible 

Scenario: Check products per page options
  When I navigate to Hair Care section
  And I click on Skincare category
  And I select another number of elements per page
  Then Selected option should be displayed

