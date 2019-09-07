# Functions

This stage focuses on the most important concept in all of programming: functions. Functions are the most basic way to abstract things in most programming languages, and they are frequently used as a way to represent all of the **actions** an object can perform. In the case of Solidity programming, it is probably more useful to think of functions as **actions**, but keep in mind that they are much more fundamental than just simple "actions".

All transactions on the blockchain are started by human actors or programs that are connected to the blockchain. In this lesson, we'll use the term **external agents** to refer to these humans and programs that create transactions on the Ethereum blockchain. In the past two stages, you have created variables for the smart contract that are **public**. As you saw, marking variables as **public** allows external agents to get data from the smart contract. 

Functions are one of the most important concepts in programming. At their most basic, functions are just empty procedures that don't do anything:

``` 
contract Nothing {
    function doNothing() public pure { } // This does nothing
}
```

Now that you know roughly what a function is, we'll describe them in more detail.

## Function Syntax

Throughout these details, we will build up how to write a function. We will do this step by step so that every part of a function can be well explained. 

All functions are started with the word **function**. Then most functions are given a name (for now, we will treat this as if all functions need a name). 

For a function named **a**, we'd start writing this function as:

```
function a() {}
```

We will address the `()` and `{}` constructs a bit later, but for now just know that they are necessary in most function definitions (the exceptions will be explained later).

## Visibility
Solidity has support for several different types of functions:

1. external
    - Can only be used by other contracts.
2. public
    - Can be used by other contracts, by the contract in which they are defined, or by contracts that inherit from the contract in which they are defined (we'll talk about inheritance a bit later).
3. internal
    - Can be used in the contract in which they are are defined or by contracts that inherit from the contract in which they are defined.
4. private
    - Can only be used in the contract in which they are defined.

All functions have to be given a **visibility** (one of the four above words), which specifies how the function can be used. 

If we wanted to make the function **a** from the "Function Syntax" section a "public" function, we'd write:

```
function a() public
```

Similarly, if we wanted to make **a** an "external" function, we'd write:

```
function a() external
```

## Mutability

Just like how Solidity functions can be given different *visibilities*, functions can also be given different **mutabilities**. Think of **function mutability** in a similar way to how you think of **function visibility** (you add a word to the function definition which changes how the function can be used); however, **function mutability** puts different restrictions on functions.

There are four different function mutabilities:

1. payable
    - Payable functions can be given ether. Only **public** and **external** functions can be payable since it doesn't really make sense for a contract to pay itself when it calls an **internal** or **private** function.
2. nonpayable
    - This is the only mutability that isn't explicitly defined in a function definition. **Nonpayable** functions are not declared as **payable**, **view**, or **pure**, which means that they cannot be payed, but they can change and read from the blockchain's state.
3. view
    - View functions cannot change the blockchain's state, but they can read from it.
4. pure
    - Pure functions cannot change the blockchain's state **and** they cannot read from the blockchain's state.

A mutability is put onto a function by adding the words defined above to the function definition (only one can be provided). For example, if we wanted to make **a** external and payable, we would write:

```
function a() external payable {}
```

The **pure** and **view** mutabilities are defined in the same way as the above function.

As mentioned above, **nonpayable** isn't a word that is used in Solidity, so to make **a** an external and nonpayable function, we would write:

```
function a() external {}
```

## Parameters

Function parameters are the values that can be given to a function to have it act in different ways. Parameters must have **types** (something that was briefly discussed in the variables section).

If we want to add a **uint256** parameter to **a** (which we'll assume is an **external nonpayable** function), we can do that like so:

```
function a(uint256) external {}
```

As seen above, function parameters can be named or unnamed in Solidity. In most cases, it's preferable to name the parameter so that they can be used within the function. Named parameters look like this:

```
function a(uint256 named) external {}
```

## Return Values

Functions can *return* values, just like they can have parameters. Say that we want to have a return value that is a **bytes32** value in the **a** fucntion. Then we would write this like so:

```
function a() external returns (bytes32) {}
```

Just like with parameters, function return values can be named or unnamed, and the naming is done in the same way as with parameters. It is less common to see named parameters in Solidity, although it is still done on a regular basis.

## Getter Functions

Oftentimes, smart contracts will have functions that return the values of variables in the smart contract or other data that the smart contract is tracking. Functions whose sole purpose is to return data are called **getters**. 

```
contract Getters {
    uint256 _a;
    
    function a() public view returns (uint256) { 
        return _a;
    }
}
```

The **a** function in the **Getters** contract just returns the **_a** variable. Notice that this has a similar affect to marking the **_a** variable as **public**. In fact, when a variable is marked public, a getter with the same name as the variable is created. The following contract looks the same as the **Getters** contract to external agents: 

```
contract Getters2 { 
    uint256 public a;
}
```

Both of these contracts have a public function called **a** that returns the value of a variable. 

## Ethereum Addresses
To give tokens to individuals, we need to know how people and smart contracts are identified. In Ethereum, accounts (people and smart contracts) are referenced by 160-bit numbers called addresses. These addresses are derived from Ethereum accounts' **private keys**, and they are in fact the least significant 160 bits of Ethereum accounts' **public keys**. In Solidity, addresses are represented by the **address** type.

## Mappings
Since your token contract needs to store the balance of people and smart contracts, it makes sense to keep track of the balances of **Ethereum addresses**. In this system, a human's balances in this token contract will be the sum of all of the **Ethereum accounts** that they control. 

The best representation for the balances in a token contract is the Solidity mapping: 

```
contract Token {
    mapping (address => uint256) balances;
}
```

In the **Token** contract, the mapping **balances** is a map from **ethereum addresses** to **uint256** values. Think of this as a key-value database that stores a **uint256** value under a given **address**. 

Items can be read from a mapping as follows:

```
contract Token {
    mapping (address => uint256) balances;

    function balanceOf(address _owner) public view 
    returns (uint256) {
        return balances[_owner];
    }
}
```

The syntax **balances\[ADDRESS\]** returns the **uint256** value that is stored in the **balances** mapping under the **address** ADDRESS. 