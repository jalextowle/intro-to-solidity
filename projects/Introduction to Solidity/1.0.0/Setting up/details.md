## Solidity

### Compiler Version
Solidity is a compiled programming language. This means that before Solidity code can be used, a special program called a **compiler** will be used to turn the source code into something that the Ethereum blockchain can understand. The language that the Ethereum blockchain needs to be given is called **EVM bytecode**. This may change to **eWASM** in the future, but for now the **EVM**, the Ethereum Virtual Machine, is what Ethereum uses to execute code. 

There are many different versions of Solidity, and for this reason, there are many Solidity compilers. Different versions of these compilers support different language features, so a line of code must be added at the top of every Solidity file to tell the compiler what version of Solidity is being compiled. This line of code is called a pragma statement, which looks like:

```
pragma solidity ^0.5.0;
```

Because this pragma specifies that Solidity version "0.5.0" is being used, only compilers that support this version will be able to compile this program. In this lesson, we will be using Solidity version 5.0 because this is one of the most recent versions of Solidity.

It is important to use up to date versions of Solidity because newer compilers are able to prevent some security vulnerabilities and can also generate more efficient bytecode. 

### Contracts
Contracts are the foundation of the code that is written in Solidity. At their most simple, contracts have the ability to be deployed to the Ethereum blockchain or a Testnet. After deployment, these contracts will only have the ability to prevent ether from being received.

Solidity has been called a "contract-oriented programming language." What this means in practice is that "contracts" should be the foundational concept used when programming in Solidity.

A Solidity smart contract is just a piece of code that is deployed to the Ethereum blockchain. A useful perspective of smart contracts is that they are like applications running on a computer. Each smart contract has *functions* that they can perform (or zero functions if it is an empty contract) and a *memory* section where data can be stored. 

Here is how an "empty" contract is written in Solidity:

```
contract A { }
```

## Documentation
Link to 0.5.0 documentation: [Solidity](https://solidity.readthedocs.io/en/v0.5.0/contracts.html)

This is the official documentation for version Solidity version **0.5.0**, and it is a phenomenal resource for learning the in's and out's of the Solidity programming language. This documentation will be referenced throughout this lesson. 