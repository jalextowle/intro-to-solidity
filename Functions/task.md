## User token balances
It's essential for users to be able to see how many tokens they have from our **Token** contract, so that they know how much they can spend. At the moment, there isn't a way for users to see how many tokens they have. 
- Add a function to the **Token** contract called **balanceOf**. 
    - Add a parameter of type **address**
    - Add a return value of type **uint256**
    - Implement the function so that it returns the value of a given address
- Add a mapping called **balances** to the contract
    - The mapping should take **address** to **uint256**