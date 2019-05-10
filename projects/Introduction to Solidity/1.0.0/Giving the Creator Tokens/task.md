## Distributing Tokens

- Add a constructor to the **Token** contract
    - Set the **totalSupply** variable to **1000 \* (10 \*\* uint256(decimals))**
    - Set the balance of the **msg.sender** to the **totalSupply**