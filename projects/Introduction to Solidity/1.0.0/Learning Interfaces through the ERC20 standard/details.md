## ERC20 Token Standard
As mentioned above, many of the most popular cryptocurrencies are ERC20 tokens. A smart contract can be called an ERC20 token if it meets the **[ERC20 Interface](https://theethereum.wiki/w/index.php/ERC20_Token_Standard)**.
We'll talk about interfaces a bit later, but for now all you need to know is that an interface defines several features that a smart contract must have to be compliant with the interface. Any smart contract that complies with an interface is allowed to be used **as the interface**, which can be a useful way to allow for many different smart contracts to be used in a standard manner. 

The ERC20 standard is one such interface. Throughout the lesson we will talk about details of the standard. In broad strokes, the ERC20 standard says that all ERC20 tokens contracts must provide a mechanism for:
- token transfers
- creation of allowances by owners
- spending of allowances on behalf of owners
- getting the balance of individual users
- getting the allowance of individual users on behalf of other users
- getting the total supply of tokens 

There are a couple of optional mechanisms that can be included: 
- getting the token's name
- getting the token's symbol
- getting the amount of decimals the token supports

In this stage, we are implementing the mechanism that gets the `total supply` of the token. 