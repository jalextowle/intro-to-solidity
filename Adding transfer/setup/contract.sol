pragma solidity ^0.5.0;

contract Token {
	string public constant name = "Token";
	string public constant symbol = "TOK";
	uint8 public constant decimals = 18;

	uint256 public tokenSupply;
	mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    constructor() public {
        totalSupply = 1000 (10 ** uint256(decimals));
        balances[msg.sender] = totalSupply;
    }

    function allowance(address _owner, address _spender) public view returns (uint256) {
        return allowed[_owner][_spender];
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
}