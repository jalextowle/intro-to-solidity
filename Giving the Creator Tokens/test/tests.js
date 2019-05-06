const Token = artifacts.require('./Token')

contract("#Token", (accounts) => {
    let token
    let tokenName = 'Token'
    let tokenSymbol = 'TOK'
    let tokenDecimals = 18
    let owner = accounts[0]
    let spender = accounts[1]
    let zero = '0'
    let totalSupply = '1000000000000000000000'

    beforeEach(async () => {
        token = await Token.new({ from: owner })
    })

    describe('ERC20 Optional', async () => {
        context('`name`', async () => {
            it('should return the correct name', async () => {
                let name = await token.name.call()
                assert.equal(name, tokenName)
            })
        })

        context('`symbol`', async () => {
            it('should return the correct name', async () => {
                let sym = await token.symbol.call()
                assert.equal(sym, tokenSymbol)
            })
        })

        context('`decimals`', async () => {
            it('should return the correct name', async () => {
                let decimals = await token.decimals.call()
                assert.equal(decimals, tokenDecimals)
            })
        })
    })

    describe('ERC20 Standard', async () => {
        context('allowance', async () => {
            it('should return zero for any owner and any spender', async () => {
                let allowance = await token.allowance.call(owner, spender)
                assert.equal(allowance.toString(), zero)
            })
        })

        context('balanceOf', async () => {
            let balance

            it('should return zero for any address other than the contract creator', async () => {
                balance = await token.balanceOf.call(spender)
                assert.equal(balance.toString(), zero)
            })

            it('should return the total supply for the contract creator', async () => {
                balance = await token.balanceOf.call(owner)
                assert.equal(balance.toString(), totalSupply)
            })
        })

        context('totalSupply', async () => {
            it('should return zero', async () => {
                supply = await token.totalSupply.call()
                assert.equal(supply.toString(), totalSupply)
            })
        })
    })
})