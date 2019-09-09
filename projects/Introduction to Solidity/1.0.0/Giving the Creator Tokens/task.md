## Distributing Tokens
1. Add a constructor to the **Token** contract
    1. Set the **totalSupply** variable to **1000 \* (10 \*\* uint256(decimals))**
        - We have to cast the `decimals` value to a `uint256` because we can't set a `uint8` to a `uint256` number in Solidity.
    2. Set the balance of the **msg.sender** to the **totalSupply**