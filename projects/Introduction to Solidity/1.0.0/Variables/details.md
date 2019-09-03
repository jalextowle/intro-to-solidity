## What are tokens?
As it turns out, most cryptocurrencies are actually "tokens" being run on top of a blockchain instead of a native crytocurrency of a blockchain (like ETH is for Ethereum). In this context, "token" is really just another word for the units of value in a ledger running on a blockchain. So tokens are really just numbers in a ledger that have some sense of "ownership". 

During the major crypto boom in 2017, many of the cryptocurrencies that were becoming popular were actually just ERC20 tokens, and most of these tokens were governed by contracts that were being run on the Ethereum blockchain. Back in those days, there were people getting rich by making ERC20 token contracts that were no more complicated than the token contract that we will make in this lesson. Unfortunately, those days seem to be behind us, but this lesson will give you the knowledge that you need to understand how many popular cryptocurrencies work and to make your own one day. 

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

To give variables a value, they can be set using the assignment operator, **=**. To give variables a default value, you would assign the variable where they are declared like so:

```
contract Token {
    uint256 a = 1; // 1 is now the default value of a
}
```

In this context, "default" means the value that the variable will have **unless the variable has been reassigned**. We'll talk more about assignment in later stages. 

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