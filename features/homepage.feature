Feature: Random
  A random feature using some Playwright stuff
Scenario: Govuk accessibility statement link
  Given I view "staging.mryum.com/demo"
  When I click "View Dine in Menu"
  Then I expect to be on the dine-in page
  When Click Drinks button and table number "19"
  Then I expect to be on the Drinks page

  When I pick "Latte" with "Soy Milk" and "2 Sugars" and "Potato Chips" qty 2
  When I pick "Mocha" with "Skim Milk" qty 1
  When I pick "Matcha Latte" with "Full Cream Milk" qty 1

  When I click the Cart

  # When I pick $20 Burger + Beer with "Cheeseburger - Wagyu patty on a crispy milk bun" and "House White" qty 3


  
