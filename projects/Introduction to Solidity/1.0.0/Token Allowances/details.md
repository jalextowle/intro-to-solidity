## Token Allowance Mechanisms
It is essential for token contracts to track the balances of their users. Something that is also nice to have is a tracking of allowances. An **allowance** of a user on behalf of a token owner can be seen as a **uint256** value that is stored under the **address** of the token owner and the **address** of the user that is being given an allowance. 

Allowances can be useful for creating functionality that allows tokens to be spent without the owner being directly involved. For example, a subscription service may require users to give their subscription smart contract an allowance of ERC20 tokens. Then, the subscription smart contract can automatically charge users in tokens for using the service. If a user would like to stop subscribing to the service, all they will need to do is set the allowance of the subscription service to zero. 

## Nested Mappings
As you saw in the previous stage, mappings can be useful for tracking data about every member of a given type. Mappings can map to any Solidity type. This includes other mappings. We can create nested mappings as follows: 

```
contract Nested {
    mapping (address => mapping (address => uint256)) allowed;
}
```

The above mapping keeps a key-value database of mappings from **addresses** to **uint256** values under each **address**. These mappings can be seen as the **allowances** of different addresses on behalf of **owner addresses**. 

The members of nested mappings can be accessed as follows:

```
contract Nested {
    mapping (address => mapping (address => uint256)) allowed;

    function allowance(
        address _owner, 
        address _spender
    ) public pure returns (uint256) {
        return allowed[_owner][_spender];
    }
}
```

Nested mappings that are deeper will continue to be accessed in a similar manner, with one bracketed value for each level of keys in the mapping. 