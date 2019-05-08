pragma solidity ^0.5.0;

contract Token {
	string public constant name = "Token";
	string public constant symbol = "TOK";
	uint8 public constant decimals = 18;

	uint256 public totalSupply;
	mapping (address => uint256) balances;
	mapping (address => mapping (address => uint256)) allowed;

	event Approval(address indexed tokenOwner, address indexed tokenSpender, uint256 tokens);
	event Transfer(address indexed from, address indexed to, uint256 tokens);

    constructor() public {
        totalSupply = 1000 * (10 ** uint256(decimals));
        balances[msg.sender] = totalSupply;
    }    

    /* Payment */

    function transfer(address _to, uint256 _value) public returns (bool) {
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        allowed[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {
        allowed[msg.sender][_spender] = _value;
		emit Approval(msg.sender, _spender, _value);
        return true;
    }

    /* Getters */

    function allowance(address _owner, address _spender) public view returns (uint256) {
        return allowed[_owner][_spender];
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }

    /* Helpers */ 
    function _transfer(address _from, address _to, uint256 _value) internal {
        balances[_from] -= _value;
        balances[_to] += _value;
        emit Transfer(_from, _to, _value);
    }
}