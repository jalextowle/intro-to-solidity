## Lesson Goal

In this lesson, we are going to be building an ERC20 token contract in the Solidity programming language. Don't worry if you don't understand any -- or all -- of the words in that sentence. This lesson will explain all of the terms. 

The reason why this lesson is focused on building an ERC20 token contract is twofold. First, ERC20 token contracts are simple enough smart contracts that they can be put together by complete beginners to Solidity and Ethereum in general. Second, these  are complex enough that we will be able to talk about all of the major features of the Solidity programming language.

## What are tokens?
As it turns out, most cryptocurrencies are actually "tokens" being run on top of a blockchain instead of a native token for a given blockchain (like ETH is for Ethereum). In this context, token is really just another word for the units of value in a ledger running on a blockchain. So tokens are really just numbers in a ledger that have some sense of "ownership". 

During the major crypto boom in 2017, many of the cryptocurrencies that were becoming popular were actually just ERC20 tokens, and most of these tokens were governed by contracts that were being run on the Ethereum blockchain. Back in those days, there were people getting rich by making ERC20 token contracts that were no more complicated than the token contract that we will make in this lesson. Unfortunately, those days seem to be behind us, but this lesson will give you the knowledge that you need to understand how many popular cryptocurrencies work. 

Part of this lesson will involve discussing **Smart Contract Security**. One of the reasons why cryptocurrencies lost popularity in late 2017 (though certainly not the only reason) was that there were several high profile hacks of smart contracts, including several token contracts. In this lesson you will learn some of the most common attacks on smart contracts, but be aware that this is not comprehensive. The smart contract that we produce will be safe from several classes of vulnerabilites, but it should still not be used in production. 

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

## Variables
In the previous lesson, we created the smart contract called **Token**. Without changing that smart contract, the smart contract doesn't have a total supply. To add a total supply to the smart contract, we will use something called a **variable**. 

A **variable** looks like this: 

``` 
contract Token {
    uint256 a; // <-- This is a variable
}
```

A variable is specified by a **type** and a **name**. In this example, the **type** is **uint256** (which stands for "256 bit unsigned integer") and the **name** is **a**. 

Solidity is a statically-typed language, which means that all variables must be given **types**. You can think about types as being labels that give variables special characteristics. In this case, since the type is **uint256**, the variable is a number. Since it's a number, the variable can be added, subtracted, multiplied, and divided just like numbers normally can be. 

Another example:

``` 
contract Token {
    address b; // <-- This is also a variable
}
```

In this example, the variable in the **Token** contract has **type** **address** and has the **name** **b**. We will talk about addresses in depth in a later stage, but for now, just know that **address** is another Solidity type. Members of type address **cannot** be added, subtracted, multiplied, and divided with other addresses. This is the first -- but not the last -- example that types are different than one another, and that they have different behavior.

## Public Variables

Even though the examples above gave a smart contract a variable, users cannot see these variables because they are not **public**. The variables **a** and **b** from above could be used **inside** of the token contract, but there is not a way to get the data from the smart contract. 

Smart contracts can have mechanisms that allow them to give data to other smart contracts and users. To make **a** and **b** available to the outside world, all we need to do is add **public** to them, like so:

``` 
contract Token {
    uint256 public a; // a is public now!
    address public b; // b is public too!
}
```

## Comments
You may have noticed that in the examples above, there were human-readable strings following the variables after the characters **"//"**. In solidity, anything after **"//"** on a line is "ignored" by the compiler. This means that you can type anything you want after **"//"**, and it will have no effect on the smart contract that you are writing. 

Another type of comment looks like this:

```
/*
IPSUM SAFJLDSFJS SKFLSJFL SLKDFSL 
*/
```

This type of comment makes the compiler ignore anything in between **"/*"** and **"*/"**, and they are sometimes called **multi-line comments**. These comments are often useful when you would like to keep code in your smart contract, but you don't want the compiler to look at it. For example, this kind of commenting is done a lot when software is being tested. 

Like many of the features in Solidity, comments are used throughout the world of programming. Almost every, if not every, language has support for comments. Why? Because comments are incredibly useful for documenting code. If someone needs to read your code, the comments that you wrote can help them understand the more complicated parts of the program. Use comments whenever you can!