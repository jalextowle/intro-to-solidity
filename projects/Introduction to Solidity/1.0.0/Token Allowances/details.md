## Token Allowance Mechanisms
It is essential for token contracts to track the balances of their users. Something that is also nice to have is a tracking of allowances. An **allowance** of a user on behalf of a token owner can be seen as a **uint256** value that is stored under the **address** of the token owner and the **address** of the user that is being given an allowance. 

Allowances can be useful for creating functionality that allows tokens to be spent without the owner being directly involved. For example, a subscription service may require users to give their subscription smart contract an allowance of ERC20 tokens. Then, the subscription smart contract can automatically charge users in tokens for using the service. If a user would like to stop subscribing to the service, all they will need to do is set the allowance of the subscription service to zero. 

## Nested Mappings
As you saw in the previous stage, mappings can be useful for tracking data about every member of a given type. Mappings can map to any Solidity type. This includes other mappings. We can create snested mappings as follows: 

```
contract Nested {
    mapping (bytes32 => mapping (bytes32 => uint256)) someMapping;
}
```

The above mapping takes in two bytes32 keys, and stores a single uint256 value. The order of the keys **does** matter to what value will be stored or loaded. If you don't believe me, then try it out for yourself!

Values are stored in the mapping like so (where someKey1 and someKey2 are bytes32 values and someValue is a uint256 value):

```
someMapping[someKey1][someKey2] = someValue;
```

Values are read in a similar way, like so:

```
someValue = someMapping[someKey1][someKey2];
```

Nested mappings that are deeper will continue to be accessed in a similar manner, with one bracketed value for each level of keys in the mapping. 