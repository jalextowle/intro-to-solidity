## Making the token safe

- Add a **require** statement to the **transfer** and **transferFrom** functions to make sure that the address that is transfering tokens has enough tokens to transfer
- Add a **require** statement to the **transferFrom** function to make sure that the **spender** has a high enough allowance to complete the **transferFrom**