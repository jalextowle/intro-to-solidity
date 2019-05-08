## Necessary Programming Concepts
The structure of Solidity causes the simplest examples of smart contracts to use several concepts for general programming. The reason for this complexity is that Solidity is a **contract oriented programming language**. This means that to write code works in Solidity, the programmer needs to use *contracts*. 

### Contracts
Contracts are the foundation of the code that is written in Solidity. At their most simple, contracts have the ability to be deployed to the Ethereum blockchain or a Testnet. After deployment, these contracts will only have the ability to prevent ether from being received.

Here is an example of an "empty" contract:

```
contract A { }
```

### Compiler Version
Solidity is a compiled language. This means that before Solidity code can be used, a special program called a **compiler** will be used to turn the source code into something that the Ethereum blockchain can understand. The language that the Ethereum blockchain needs to be given is called **EVM bytecode**. This may change to **eWASM** in the future, but for now the **EVM**, the Ethereum Virtual Machine, is what Ethereum uses to execute code. 

There are many different versions of Solidity, and for this reason, there are many Solidity compilers. Different versions of these compilers support different language features, so a line of code must be added at the top of every Solidity file to tell the compiler what version of Solidity is being compiled. This line of code is called a pragma statement, which looks like:

```
pragma solidity ^0.5.0;
```

This statement specifies the Solidity version that is being used in this lesson, so every Solidity source file will need to have a similar statement at the top of the file.

## Documentation
Link to 0.5.0 documentation: [Solidity](https://solidity.readthedocs.io/en/v0.5.0/contracts.html)

This is the official documentation for version Solidity version **0.5.0**, and it is a phenomenal resource for learning the in's and out's of the Solidity programming language. This documentation will be referenced throughout this lesson. 