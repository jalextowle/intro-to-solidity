## Goal

In this lesson, we are going to be building an ERC20 token contract in the Solidity programming language. ERC20 token contracts are simple enough smart contracts that they can be put together by complete beginners to Solidity and Ethereum in general. This said, these contracts are complex enough that we will be able to talk about all of the major features of the Solidity programming language.

## Tracking the token's supply
How many tokens does our contract have? Well at the moment, it doesn't seem to have any. In this section, you'll change that. 
- Add a **uint256 public** field called **totalSupply** to the **Token** contract.
    - The *totalSupply* of a token is the total amount of tokens in existence. This can be as small as zero, and as big as the largest *uint256* number!