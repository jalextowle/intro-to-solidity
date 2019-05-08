## Token Transfers
Most token standards allow owners of tokens to transfer their tokens. Token transfers are not necessary for all applications; however, they are almost always desirable. 

The **balances** mapping in the smart contract or the **balanceOf** function can be used to get the balance of a given Ethereum address in the token contract. To transfer tokens, the balance of the sender of the transfer should be descreased by the amount to transfer. Additionally, the balance of the recipient of the transfer should be increased by the amount being transferred. 

The balance of the sender can be decreased as follows:

```
contract Token {
    mapping (address => uint256) balances;

    function decreaseBalance(uint256 _value) public {
        balances[msg.sender] -= _value;
    }
}
```

This function will decrease the balance of the `msg.sender` by the specified `_value`. Recall from the previous stage that the `msg.sender` value is the Ethereum address of the smart contract or user agent that directly called the **Token** smart contract's **decreaseBalance** function.

## Function Mutability

Notice that the **decreaseBalance** function above was not marked as **pure** or **view**. When the value of the **balances** mapping at index **msg.sender** is changed, a piece of state on the blockchain actually needs to be changed. Since we want state variables (like the mapping **balances**) to keep their value across transactions, the Ethereum miners actually need to store this data on their computers. This requires changing the state of the blockchain, so no function mutability (**pure** or **view**) can be specified.

Just like writing to a mapping -- or any other state variable -- involves changing the state of the blockchain, reading from a mapping involves **viewing the state of the blockchain**. Functions that only **view** state and do not change the blockchains state can be marked as **view**.

Functions that neither view or change state can be marked as **pure**.

Pay attention to these mutability declarations going forward. The Solidity compiler will log warnings if the strictest viable mutability is not used because the mutability specifier can actually be fairly important. When the state of the blockchain does not need to be changed (like with pure and view functions), Ethereum transactions do not need to be created to run the functions in a smart contract. This does not have an effect on smart contracts that call functions in other smart contracts, but it can cause huge efficiency boosts in off-chain programs. Such function calls can actually be run without causing all of the computers in the network to be involved, which cuts down on costs when getting the data. 

## Security
Now that your token is beginning to take shape, it is necessary to talk about smart contract security. Even though smart contracts may appear like normal programs, they are completely binding when run on a secure blockchain like Mainnet Ethereum. 

**The Token smart contract is extremely unsafe in its current form**. Make sure that you complete the lesson before using any version of the **Token** smart contract so that you know what attacks can be used against your **Token** contract.