const Token = artifacts.require('./Token')

// A test suite for the Token smart contract
contract('#Token', () => {
    // This test passes if the Token contract deploys successfully
    it('should deploy successfully', async () => {
        await Token.new()
    })
})