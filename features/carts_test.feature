Feature: test assessment - carts test

  Scenario Outline: Create adding to item to cart
    Given I create a wiremock stub for the cart
    When I add a items to my cart
      | id   | unitPrice   | quantity   |
      | <ID> | <UNITPRICE> | <QUANTITY> |
    And I read a wiremock stub for the cart
    Then I view my cart and verify the data is correct
      | id         | <ID>         |
      | unitPrice  | <UNITPRICE>  |
      | quantity   | <QUANTITY>   |
      | totalPrice | <TOTALPRICE> |

    Examples:
      | ID   | UNITPRICE | QUANTITY | TOTALPRICE |
      | civ6 | 100       | 1        | 100        |

  # If I had a real service I would perform these extra test cases given on the information I have
  # 1. Create a test for verifying different products (id's)
  # 2. Create a test if the service has different locale prices
  # 3. Create a test if there is an inventory cap and it displays the error messages
  # 4. Create if the check is able to take in special characters for unit price or quantity
  # 5. Create a test for invalidating SQL injection(security)
