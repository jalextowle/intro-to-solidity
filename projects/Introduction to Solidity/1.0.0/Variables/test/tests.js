const Token = artifacts.require('./Token')

contract("#Token", () => {
    let token

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('ERC20 Standard', async () => {
        context('totalSupply', async () => {
            it('should return zero', async () => {
                assert(token.totalSupply, "Could not find a totalSupply on your contract")
                let result = await token.totalSupply.call()
                assert.equal(result.toString(), '0')
            });
        })
    })
})