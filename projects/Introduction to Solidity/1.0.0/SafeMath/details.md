## Libraries
Contracts are only one way to create bundled objects of functions in Solidity. Another way to accomplish the same thing is to use libraries. Just like contracts, libraries can be filled with functions. Unlike contracts, libraries cannot have variables and they cannot be deployed. The only way to use the functions in a library is to use them in a contract. A library might look like this: 

``` 
library Sample {
    function add(
        uint256 _a,
        uint256 _b
    ) internal pure returns (uint256) {
        return _a + _b;
    }
}
```

To actually use the function add, you'll need to use the `using LIBRARY for TYPE` syntax. This looks as follows:

```
contract Adder {
    using Sample for uint256;

    function adder(
        uint256 _a, 
        uint256 _b
    ) public pure returns (uint256) {
        return _a.add(_b);
    }
}
``` 

Notice that **_a** is of type **uint256**, which is the same type as the first parameter to the **add** function. In general, the parameter that is put before the **.** must be of the same type as the first parameter of the function. 

## SafeMath
To fix the **Token** contract's **integer underflow vulnerabilities**, several **require** statements were added to the smart contract. While these statements are sufficient for protecting against **underflow attacks**, a potentially better solution would be to prevent any arithmetic from underflowing or overflowing. 

It is very common for smart contracts to use SafeMath libraries in production. These libraries will implement functions that prevent any arithmetic underflows and overflows from occuring by reverting when they do occur. Oftentimes, using SafeMath for all arithmetic is a better way to prevent integer underflows and overflows than require statements because it requires less maintenance and requires less thought.

## OpenZeppelin
A set of open-source libraries and contracts that are used in many Solidity contracts is the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity) project. These libraries and contracts are all audited frequently, which means that they can be used and considered to be secure from most attacks. 

These contracts and libraries are a good resource to use to both learn more about smart contract security and to learn more about smart contracts in general. OpenZeppelin has an [ERC20 Token](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/ERC20.sol) and several other types of token contracts as well. Comparing these contracts with the token that you created will be a good exercise. 