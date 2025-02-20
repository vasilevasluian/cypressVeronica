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
