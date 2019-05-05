const Token = artifacts.require('./First')

// A test suite for the First smart contract
contract('#Token', () => {
    // This test passes if the First contract deploys successfully
    it('should deploy successfully', async () => {
        await Token.new()
    })
})