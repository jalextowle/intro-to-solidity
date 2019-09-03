# Smart Contract Security

The study and practice of securing smart contracts is known as **Smart Contract Security**. One of the reasons why cryptocurrencies lost popularity in late 2017 (though certainly not the only reason) was that there were several high profile hacks of smart contracts, including several token contracts. This field is an exciting, interesting, and dynamic area of research and engineering (and the one where this author found his start in Ethereum programming). As mentioned previously, we will be discussing a few of the potential attacks that can be made on ERC20 contracts.

## Integer Underflows
In the **Token** smart contract, all balances are represented by 256 bit unsigned integers. Because these numbers are unsigned, the values of these integers are always greater than or equal to zero. In normal arithmetic, an expression like `0 - 1` would be equal to the integer `-1`. **This is not what happens with uint256 numbers**. 

You can think about subtraction as an operation that **wraps around** for **uint256** numbers in Solidity. When the subtraction of two **uint256** numbers is equal to another **uint256** number, the **+** and **-** operators work as expected. Weird things start to happen when the result of a **uint256** subtraction doesn't result in a **uint256** number. The behavior in these cases, is that the result of the subtraction is equal to **(a - b) % 2^256** (where this is evaluated in the world of arbitrarily sized integers).

When the result of a subtraction of two **uint256** **a** and **b** wraps around the **uint256** values to the top of the **uint256** values, we say that the subtracts **underflows**. Exploitations of underflow vulnerabilites are called **integer underflow attacks**.

## Require Statements
As it happens, the **transfer**, **transferFrom**, and **approve** functions are susceptible to integer underflow attacks (unless you went above and beyond on some of the tasks). The vulnerability is scary too: if a user owns zero tokens and transfers 1 token to anyone, they will end up with the largest **uint256** value worth of tokens. 

To fix these security issues, we will make use of a Solidity feature called the **require** statement. Require statements take in a **true** or a **false** value. If a require statement's input is a **true** value, the execution continues as if nothing happened. If instead the input is **false**, then the execution ends and all state changes made during the transaction are thrown away as if they were never made. These traits make the require statement an ideal candidate for enforcing conditions in smart contract code; they will make sure that nothing happens if the conditions aren't met.

The syntax of a require statement looks as follows: 

```
contract Token {
    mapping (address => uint256) balances;

    function transfer(address _to, uint256 _value) public {
        // This require statement ensures that the sender
        // has a large enough balance to make the transfer. 
        require(balances[msg.sender] >= _value);
        /* Transfer code here ... */
    }
}