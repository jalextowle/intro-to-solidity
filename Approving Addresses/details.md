## Approving Addresses
The **Token** contract from the past few stages already has the groundwork for tracking the balances of users on behalf of token owners. To make this mechanism useful, token owners will need to be able to change the allowance of other users.

The ERC20 standard's mechanism for changing allowances is a function called **approve**. This method allows the **msg.sender** of the function call to change the allowance of a specified address.

## Setting Nested Mappings
In order to change the allowance of a user on behalf of an owner, the **approve** function will need to update the value of the **allowed** nested mapping. Nested mapping values can be set as follows:

```
contract Set {
    mapping (address => mapping (address => uint256)) allowed;

    function set(
        address _a, 
        address _b, 
        uint256 _value
    ) public {
        allowed[_a][_b] = _value;
    }
}