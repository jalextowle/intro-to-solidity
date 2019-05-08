## Events
At this point, the **Token** contract is almost completely compliant with the ERC20 standard. The only thing left to add are the **events** in the standard. Ethereum **events** are another form of state on the Ethereum blockchain. Events can be declared as follows:

```
contract Token {
    event Transfer(
        address indexed from, 
        address indexed to, 
        uint256 tokens
    );
}
```

After writing this event declaration, the **Transfer** event will be available for the functions in the smart contract to use. Events must have names that they can be referenced by (the name of this event is "Transfer"). Events can also have fields. Some of the fields in an event can be marked as **indexed**. Such fields are stored as **topics** in the event, which can easily be accessed by looking at the event. Unindexed fields of the event are part of the event's **data**, which is slightly harder to be accessed. 

Unlike storing data on the Ethereum blockchain, using events is actually extremely cheap. Events are not accessible the smart contract, so they can only be used in certain situations. This said, they can be extremely useful, so many standards specify their use. Events can be **emitted** as follows:

```
contract Token {
    event Transfer(
        address indexed from, 
        address indexed to, 
        uint256 tokens
    );

    function emitTransfer(
        address _from,
        address _to,
        uint256 _tokens
    ) public {
        emit Transfer(_from, _to, _tokens);
    }
}
```

## Applications of Events
Even though smart contracts cannot access events directly, events are often used by off-chain programs to be alerted whenever certain events are emitted. These programs can use these events for a variety of reasons, some of which include
- triggering payments
- triggering data injection into the contract
- creating a log of important events that occurred in the smart contract's lifetime