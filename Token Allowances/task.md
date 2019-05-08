## Allowance
ERC20 tokens allow users to spend their own tokens and also to spend the tokens of other users, so long as the owner of the token has given the spender an allowance. Let's update the **Token** contract so that our user's can see their allowances. 

- Add a function called **allowance**
    - Add two address parameters (call the first **owner** and the second **spender**)
    - Add a return value of type **uint256**
    - Implement the function so that users can see their accurate allowance
- Add a mapping called **allowed** to the contract
    - The mapping should take **address** to **mapping (address => uint256)****