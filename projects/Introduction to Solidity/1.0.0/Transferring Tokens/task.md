## Making tokens spendable

1. Add a function called **transfer**
    1. Add an **address** parameter called **to**.
    2. Add a **uint256** parameter called **value**.
    3. Implement the function so that it transfers **value** tokens from the sender of the message to the **to** address.
    4.  Make sure that the function returns a `bool`. It should return `true` when the transfer succeeds. 
        - This is a part of the standard (the ERC20 standard) that we are implementing. Honestly, most applications do not use this boolean since many ERC20 tokens use it incorrectly. This said, it is important to try to comply with the standard.