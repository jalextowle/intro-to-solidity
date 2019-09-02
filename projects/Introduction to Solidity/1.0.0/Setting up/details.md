## Solidity

## Target Language
Solidity is a compiled programming language. This means that before Solidity code can be used, a special program called a **compiler** must be used to turn the source code into something that the Ethereum blockchain can understand. The language that the compiler outputs is called a **target language**. Since Ethereum only understands a very special language of numbers called **EVM opcodes**, the **target language** produced by the Solidity compiler---also known as **solc**---is made up of these **EVM opcodes**. **EVM bytecode**---strings of **EVM opcodes**---may eventually be replaced by a language called **eWASM**, but for now the **EVM**, the Ethereum Virtual Machine, solely uses **EVM bytecode** to execute code on the Ethereum blockchain.

## Compiler Version
There are many different versions of Solidity, and for this reason, there are different versions of **solc**. Overtime, **solc** has been adapted to support new language constructs and to produce more efficient **EVM bytecode**. 

### Semantic Versioning

Like most major software projects, **solc** is released in stable and tested versions called **releases**. These **releases** are numbered using a numbering system called **semantic versioning**. 

A semantic version number consists of three or more numbers seperated by periods that look like this:

```
1.2.3
```

A complete summary of semantic versioning best practices can be found here: [semver documentation](https://semver.org/). 

To quickly summarize the above documentation, the first number represents a **major version**, a version that is incompatible with previous versions, the second number represents a **minor version**, a version that contains new features that are backwards-compatible with previous versions, and the third number represents a **patch version**, a version that only contains bug fixes to previous versions. 

Solidity uses the convention that the second number is the major version and the third number is the minor version, leaving the first number for future major milestones. 

### Version Syntax
Solidity requires a special kind of statement to be written at the top of each Solidity source file called a **pragma statement**. These statements look like this example:

```
pragma solidity ^0.5.0;
```

Because this pragma specifies that Solidity version "0.5.0" is being used, only compilers that support this version will be able to compile this program. In this lesson, we exclusively use version "0.5.0", so this statement must be written at the top of each source file.

It is important to use up-to-date versions of Solidity because newer compilers are able to prevent some security vulnerabilities and can also generate more efficient bytecode. 

## Contracts
Contracts are the basic unit of abstraction in Solidity. At their simplest, contracts only have the ability to be deployed to the Ethereum blockchain or a Testnet, with no other uses. After deployment, these contracts will only have the ability to prevent ether from being received.

A Solidity smart contract is just a piece of code that is deployed to the Ethereum blockchain. A useful perspective of smart contracts is that they are like applications running on a computer. Each smart contract has zero or many *functions* that they can perform and *storage* that can store data long term.

Here is how an "empty" contract is written in Solidity:

```
contract A { }
```

The above contract is the "simplest contract" that was referenced above. It has no functions, will not store anything on the blockchain, and will not allow ether to be sent to it. 

## Documentation
[Solidity 0.5.0 documentation](https://solidity.readthedocs.io/en/v0.5.0/contracts.html)

This is the official documentation for version Solidity version **0.5.0**, and it is a phenomenal resource for learning the in's and out's of the Solidity programming language. This documentation will be referenced throughout this lesson. 

[Ethereum Wiki](https://github.com/ethereum/wiki/wiki)

This is the official documentation for Ethereum and contains information that can't be found elsewhere. It is a treasure trove of valuable Ethereum information.