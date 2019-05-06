const Token = artifacts.require('./Token')

contract("#Token", (accounts) => {
    let token
    let owner = accounts[0]

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('ERC20 Optional', async () => {
        context('`name`', async () => {
            it('should return the correct name', async () => {
                let name = await token.name.call()
                assert.equal(name, "Token")
            })
        })

        context('`symbol`', async () => {
            it('should return the correct name', async () => {
                let sym = await token.symbol.call()
                assert.equal(sym, "TOK")
            })
        })

        context('`decimals`', async () => {
            it('should return the correct name', async () => {
                let decimals = await token.decimals.call()
                assert.equal(decimals, 18)
            })
        })
    })

    describe('ERC20 Standard', async () => {
        context('balanceOf', async () => {
            it('should return zero for any owner', async () => {
                let result = await token.balanceOf.call(owner)
                assert.equal(result.toString(), '0')
            })
        })

        context('totalSupply', async () => {
            it('should return zero', async () => {
                let result = await token.totalSupply.call()
                assert.equal(result.toString(), '0')
            })
        })
    })
})