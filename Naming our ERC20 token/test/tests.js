const Token = artifacts.require('./Token')

contract("#Token", () => {
    let token

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('the function', async () => {
        context('`name`', async () => {
            it('should succeed', async () => {
                await token.name()
            })

            it('should return the correct name', async () => {
                let name = await token.name.call()
                assert.equal(name, "Token")
            })
        })

        context('`symbol`', async () => {
            it('should succeed', async () => {
                await token.symbol()
            })

            it('should return the correct name', async () => {
                let sym = await token.symbol.call()
                assert.equal(sym, "TOK")
            })            
        })

        context('`decimals`', async () => {
            it('should succeed', async () => {
                await token.decimals()
            })

            it('should return the correct name', async () => {
                let decimals = await token.decimals.call()
                assert.equal(decimals, 18)
            })
        })
    })
})