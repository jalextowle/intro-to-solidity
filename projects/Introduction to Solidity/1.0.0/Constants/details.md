## Decimals
Splitting money has always been a problem. Take dollars for instance: one dollar can be split up into one-hundred cents. After cents, there isn't really a way to split dollars physically, so only banks, gas companies, etc. use extra precision because they actually need it. 

In the world of cryptocurrency, splitting money becomes an even bigger problem because the currencies are expected to change dramatically in value. Think about if the dollar exploded in value, and in 5 years, 1 dollar is worth 100 of today's dollars. In that world (provided that our currency isn't changed), one cent would represent 1 dollar, and that would be the smallest quantity that dollars could represent. This is the situation that cryptocurrencies are faced with. 

To account for these issues, ERC20 tokens can have an extra field called **decimals**. This field holds an integer (an 8-bit unsigned integer, to be precise), and it represents the number of decimal places that are tracked by the currency. 

As an example: 

$1.03

represents 1 dollar and 3 cents. This is the maximum accuracy that our physical currency (dollars and cents) can represent. 
After the decimal point, there are only 2 digits, so if the dollar was an ERC20 token, its **decimals** field would be equal to **2**. 

Bitcoin can be tracked out to 10 decimal places like so:

B 2.0102040111 

so it would have a **decimals** value of **10**. 

Ethereum tracks even more decimals and would have a **decimals** value of **18**. 

Most ERC20 tokens follow Ethereum's convention and use a **decimals** field of 18. You can choose whatever you'd like in this lesson.

This field is a `uint8` in the ERC20 standard because a `uint8` is big enough to handle any number of decimals in a `uint256`. Think of it like this:

Every number of digits represents one extra bit in the total amount of tokens. There are only `256` bits in a `uint256` number, so a `uint8` number is more than large enough to accomodate the number of digits in a `uint256` number.

## Strings
The task for this stage requires that two **string** variables are added to the smart contract. This type exists in most statically-typed languages, and it represents a "string of characters." To be a bit more precise, a string is a sequence of encoded characters. In most languages, strings are represented by putting quotation marks around the "string of characters" that are supposed to be in the string. 

Example: 

```
contract Token {
    // name is set to "Hello, World!" 
    string name = "Hello, World!"; 
}
```

## Constants
Variables are used to give smart contracts different named values. Sometimes, it will be necessary to give the smart contract named values that will never be changed. In these cases, we can save **gas** by making the variable a **constant**. You can use constants in the much the same way that you use normal variables; however, constants cannot be changed after they are set for the first time. 

Example: 

```
contract Token {
    // name is a constant now, which makes it cheaper to use
    string constant name = "Token";
}
```

Constants can be made **public** just like normal variables, and public constants can be seen by the outside world, just like normal variables. 

Example:

``` 
contract Token {
    // name is public now!
    string public constant name = "Token";
}
```

## Gas
Even though this lesson will not talk about the Ethereum blockchain in much depth, there are some details that are unavoidable for those developing smart contracts (like you!). One such detail involves something called **gas**.

A simple analogy that is often used to explain gas is that Ethereum gas is just like the gas you put in your car. It makes your smart contracts run! So in the same way that the gas you put into your car is consumed by your engine, the gas you put into a smart contract is consumed. 

There are several technical reasons why gas is needed in Ethereum. 
- First, a lot of computers have to execute the requests the are put onto the blockchain. In fact, **every single miner** will need to execute every transaction on the Ethereum blockchain. With this in mind, it makes sense that Ethereum's developers want to encourage efficient use of the blockchain. The way that efficient behavior is incentivized is that users must pay for gas with ether. This cost is calculated as `Cost = GAS_USED * GAS_PRICE`, where the GAS_PRICE is specified by the user. Having the users specify the price of gas may seem counterintuitive; however, it makes sense once you consider that miners get to execute transactions in **whatever order they want**. So the higher the GAS_PRICE that is specified, the better the chance that the transaction is executed in a timely manner. 
- Second, there is a well-known problem in Computer Science that computers cannot solve, called the Halting Problem. The implications of this is that a program cannot determine whether an arbitrary program ever stops. We really don't want programs running forever on the blockchain because it would jam up the system, so we just ensure that every transaction can only have a finite amount of gas (usually a fairly low amount). This ensures that all transactions either end or they are ended by the blockchain because they ran out of gas. 