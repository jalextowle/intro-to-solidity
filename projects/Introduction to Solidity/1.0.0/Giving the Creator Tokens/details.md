## Constructors
Smart contracts don't automatically exist on the blockchain. They have to be deployed before they can be use. 

To deploy Solidity smart contracts, a special function called a **constructor** is used. Constructors are created as follows: 

```
contract Constructable {
    constructor public {}
}
```

The above constructor is one of the simplest constructors possible. When this constructor is called, a new instance of the smart contract is deployed to the blockchain at an **ethereum address**. When users interact with smart contracts, they interact with instances of smart contracts that reside at specific **addresses**. 

In the previous stages, the **Token** contract did not have a declared constructor. If a constructor is not specified in a Solidity smart contract, a default constructor will be used. As it turns out, the default constructor does the exact same thing as the empty constructor above. More complicated constructors can actually set and read values:

``` 
contract ComplicatedConstructable {
    uint256 a;

    constructor(uint256 _a) public {
        a = _a;
    }
}
```

Just like normal functions, constructors can have a list of  parameters, and they can also set state variables. Constructors are not allowed to return values. The reason for this is fairly technical, and it is out of the scope of this tutorial, but it can be found in the [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf). This edge case is a good example that a thorough understanding of the Ethereum Virtual Machine is necessary to fully understand the Solidity programming language and Ethereum smart contracts in general. 

## Transaction Data
As discussed in previous stages, smart contract execution always originates from an external agent. To make this more precise, all activity on the Ethereum blockchain derives from **Ethereum transactions**. These transactions are messages submitted to the Ethereum network by humans and computer programs that are acting through their **Ethereum account**. 

Several pieces of data are packaged in Ethereum transactions so that the amount of gas being sent, the gas price, the Ethereum address to **call**, the data to be sent with the call the target address (if any), and some other data are all known to the Ethereum miners. The structure of transactions ensures that users can specify the behavior that they want to occur. All of this information is available to smart contracts when they are called. 

For example, the Ethereum address that originally sends an Ethereum transaction can be accessed with the syntax `tx.origin` in Solidity. Similarly, the last Ethereum address that was used before the current smart contract was called can be accessed with the syntax `msg.sender` in Solidity. 

For now, this is all of the information that you'll need about transaction data, but there is much data more that can be viewed. 

## Setting Mappings
Mappings can be set with the following syntax:

```
contract Token {
    mapping (address => uint256) balances;

    // This is a dangerous function for a token contract since
    // anyone will be able to set whichever balance they would like!
    // Anyone can call this, and there are no restrictions on what people
    // can do with this.
    function set(address _owner, uint256 _value) public {
        balances[_owner] = _value;
    }
}
```

Make sure that you don't include the above function in any token contracts because it will allow anyone to set any addresses balance to any value. In general, this is extremely undesirable behavior. 

Just like state variables, mappings can be set in constructors. The initial dispursment of tokens in your token smart contract should occur in the constructor, so that someone always has tokens in the smart contract. 