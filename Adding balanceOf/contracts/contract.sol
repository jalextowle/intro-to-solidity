pragma solidity ^0.5.0;

contract Token {
	string public constant name = "Token";
	string public constant symbol = "TOK";
	uint8 public constant decimals = 18;

	uint256 public tokenSupply;
	mapping (address => uint256) balances;

    /* Getters */

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
}