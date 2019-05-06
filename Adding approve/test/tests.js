const Token = artifacts.require('./Token')

contract("#Token", (accounts) => {
    let token
    let tokenName = 'Token'
    let tokenSymbol = 'TOK'
    let tokenDecimals = 18
    let owner = accounts[0]
    let spender = accounts[1]
    let zero = web3.utils.toBN('0')
    let totalSupply = web3.utils.toBN('1000000000000000000000')

    beforeEach(async () => {
        token = await Token.new({ from: owner })
    })

    describe('ERC20 Optional', () => {
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

    describe('ERC20 Getters', () => {
        context('allowance', async () => {
            it('should return zero for any owner and any spender that have not been approved', async () => {
                let allowance = await token.allowance.call(owner, spender)
                assert.equal(allowance.toString(), zero.toString())
            })
        })

        context('balanceOf', async () => {
            let balance

            it('should return zero for any address other than the contract creator', async () => {
                balance = await token.balanceOf.call(spender)
                assert.equal(balance.toString(), zero.toString())
            })

            it('should return the total supply for the contract creator', async () => {
                balance = await token.balanceOf.call(owner)
                assert.equal(balance.toString(), totalSupply.toString())
            })
        })

        context('totalSupply', async () => {
            it('should return zero', async () => {
                supply = await token.totalSupply.call()
                assert.equal(supply.toString(), totalSupply.toString())
            })
        })
    })

    describe('ERC20 Stateful Functions', async () => {
        context('approve', async () => {
            describe('the owner gives the spender an allowance of 1', async () => {
                let allowance
                
                beforeEach(async () => {
                    await token.approve(spender, web3.utils.toBN(1), {
                        from: owner
                    })
                })

                it('should set the spender\'s allowance to 1', async () => {
                    allowance = await token.allowance.call(owner, spender)
                    assert.equal(allowance.toString(), '1')
                })

                describe('the owner changes the approval to 0', async () => {
                    beforeEach(async () => {
                        await token.approve(spender, web3.utils.toBN(0), {
                            from: owner
                        })
                    })

                    it('should change the spender\'s allowance to 0', async () => {
                        allowance = await token.allowance.call(owner, spender)
                        assert.equal(allowance.toString(), zero)
                    })
                })
            })
        })

        context('transfer', async () => {
            describe('the owner transfers a value of 1 to the spender', () => {
                let balance

                beforeEach(async () => {
                    await token.transfer(spender, web3.utils.toBN(1), {
                        from: owner
                    })
                })

                describe('first transfer', async () => {
                    it('should decrease the owner\'s balance by 1', async () => {
                        balance = await token.balanceOf.call(owner)
                        assert.equal(
                            balance.toString(),
                            totalSupply.sub(web3.utils.toBN(1)).toString()
                        )
                    })

                    it('should increase the spender\'s balance to 1', async () => {
                        balance = await token.balanceOf.call(spender)
                        assert.equal(balance.toString(), '1')
                    })
                })

                describe('second transfer', async () => {
                    beforeEach(async () => {
                        await token.transfer(spender, web3.utils.toBN(1), {
                            from: owner
                        })
                    })

                    it('should decrease the owner\'s balance by 1', async () => {
                        balance = await token.balanceOf.call(owner)
                        assert.equal(
                            balance.toString(),
                            totalSupply.sub(web3.utils.toBN(2)).toString()
                        )
                    })

                    it('should increase the spender\'s balance by 1', async () => {
                        balance = await token.balanceOf.call(spender)
                        assert.equal(balance.toString(), '2')
                    })
                })
            })
        })
    })
})