## Transfer From
Allowances aren't very useful if you can't spend them. This is why you need to create the **transferFrom** function. This function is similar to the **transfer** function, but instead of spending the tokens of the **msg.sender**, **transferFrom** spends the tokens of a token owner address. The function also needs to adjust the allowance of the address that is spending the tokens, which is the **msg.sender** in this case.

## Internal Functions
Functions are a way to create abstractions in programs. It is desirable to encapsulate commonly used parts of programs in functions. Grouping common pieces of logic in functions makes code more readable, and it also makes the code more maintainable. If a bug is found in the logic of a function, the function body is the only code that needs to be changed to fix it. On the other hand, repeated lists of code will require as many changes as there are copies of the code. 

The **transfer** and **transferFrom** functions share some logic in common, so it would be useful to create a "helper function." Solidity helper functions should be marked as **internal**, like the following: 

```
contract Internal {
    function add(
        uint256 a, 
        uint256 b
    ) internal pure returns (uint256) {
        return a + b;
    }
}
```

The **add** function will not be visibele to external agents, but other functions in the Internal smart contract will be able to use the **add** function. Since **internal** functions cannot be used outside of their smart contract instance, these functions are cheap to use because all of the memory that Solidity smart contracts use during execution can be kept between internal function calls. 