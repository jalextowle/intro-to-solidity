## Making things ERC20 Compliant

- Add an event called **Transfer** to the contract
    - Add an **indexed** **address** field called **from**
    - Add an **indexed** **address** field called **to**
    - Add a **uint256** field called **tokens**
- Add an event called **Approval** to the contract
    - Add an **indexed** **address** field called **tokenOwner**
    - Add an **indexed** **address** field called **tokenSpender**
    - Add a **uint256** field called **tokens**
- Update the **transfer** and **transferFrom** functions to emit the **Transfer** event with the appropriate data
- Update the **approve** function to emit an **Approval** event with the appropriate data