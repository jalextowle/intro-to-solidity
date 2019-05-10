## Functions
All transactions on the blockchain are started by human actors or programs that are connected to the blockchain. In this lesson, we'll use the term **external agents** to refer to these humans and programs that create transactions on the Ethereum blockchain. In the past two stages, you have created variables for the smart contract that are **public**. As you saw, marking variables as **public** allows external agents to get data from the smart contract. 

Since all transactions originate from external agentsEssentially, smart contracts are static programs that only execute when an Ethereum transaction **calls** the smart contract. In the view of Solidity, the way to expose functionality to the outside world is by using **functions**. 

Functions are one of the most important concepts in programming. At their most basic, functions are just empty procedures that don't do anything:

``` 
contract Nothing {
    function doNothing() public pure { }
}
```

The **doNothing** function is aptly named because it does nothing. It is marked as **public**, which allows external agents to **call** the function. Since this function doesn't actually get data from the blockchain (no data is used in the function) or change the state of the blockchain, it can be marked as **pure**. 

More complex functions can be given **parameters**, which the function will have access to when it executes. Additionally, functions can **return** data: 

```
contract Return {
    function addOne(uint256 _parameter) public pure returns (uint256) {
        return _parameter + 1;
    }
}
```

The above function is given a parameter that is a **uint256** and it is called **_parameter**. In this case, the function is only given one parameter, but in general functions can have a comma-seperated list of parameters. After the **public pure** declaration, there is a declaration of **returns (uint256)**. Solidity functions must specify their return types

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