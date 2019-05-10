const Token = artifacts.require('./Token')

/* Helpers */

// This function was taken from Chainlink's test suite. The original version is here: 
// https://github.com/smartcontractkit/chainlink/blob/master/evm/test/support/helpers.ts#L196
let assertActionThrows = (action) =>
    Promise.resolve()
        .then(action)
        .catch(error => {
            assert(error, 'Expected an error to be raised')
            assert(error.message, 'Expected an error to be raised')
            return error.message
        })
        .then(errorMessage => {
            assert(errorMessage, 'Expected an error to be raised')
            const invalidOpcode = errorMessage.includes('invalid opcode')
            const reverted = errorMessage.includes(
                'VM Exception while processing transaction: revert'
            )
            assert(
                invalidOpcode || reverted,
                'expected following error message to include "invalid JUMP" or ' +
                `"revert": "${errorMessage}"`
            )
            // see https://github.com/ethereumjs/testrpc/issues/39
            // for why the "invalid JUMP" is the throw related error when using TestRPC
        })

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

    describe('ERC20 Stateful Functions', () => {
        context('approve', async () => {
            describe('the owner gives the spender an allowance of 1', async () => {
                let allowance, tx

                beforeEach(async () => {
                    tx = await token.approve(spender, web3.utils.toBN(1), {
                        from: owner
                    })
                })

                it('should set the spender\'s allowance to 1', async () => {
                    allowance = await token.allowance.call(owner, spender)
                    assert.equal(allowance.toString(), '1')
                })

                describe('the event logs', async () => {
                    it('should contain one event', async () => {
                        assert.equal(tx.logs.length, 1)
                    })

                    it('should contain an Approval event', async () => {
                        assert.equal(tx.logs[0].event, 'Approval')
                    })

                    it('should have the correct tokenOwner', async () => {
                        assert.equal(tx.logs[0].args.tokenOwner, owner)
                    })

                    it('should have the correct tokenSpender', async () => {
                        assert.equal(tx.logs[0].args.tokenSpender, spender)
                    })

                    it('should have the correct tokens', async () => {
                        assert.equal(tx.logs[0].args.tokens.toString(), '1')
                    })
                })

                describe('the owner changes the approval to 0', async () => {
                    beforeEach(async () => {
                        tx = await token.approve(spender, web3.utils.toBN(0), {
                            from: owner
                        })
                    })

                    it('should change the spender\'s allowance to 0', async () => {
                        allowance = await token.allowance.call(owner, spender)
                        assert.equal(allowance.toString(), zero)
                    })

                    describe('the event logs', async () => {
                        it('should contain one event', async () => {
                            assert.equal(tx.logs.length, 1)
                        })

                        it('should contain an Approval event', async () => {
                            assert.equal(tx.logs[0].event, 'Approval')
                        })

                        it('should have the correct tokenOwner', async () => {
                            assert.equal(tx.logs[0].args.tokenOwner, owner)
                        })

                        it('should have the correct tokenSpender', async () => {
                            assert.equal(tx.logs[0].args.tokenSpender, spender)
                        })

                        it('should have the correct tokens', async () => {
                            assert.equal(tx.logs[0].args.tokens.toString(), '0')
                        })
                    })
                })
            })
        })

        context('transfer', async () => {
            describe('the owner transfers a value of 1 to the spender', () => {
                let balance, tx

                beforeEach(async () => {
                    tx = await token.transfer(spender, web3.utils.toBN(1), {
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

                    describe('the event logs', async () => {
                        it('should contain one event', async () => {
                            assert.equal(tx.logs.length, 1)
                        })

                        it('should contain an Transfer event', async () => {
                            assert.equal(tx.logs[0].event, 'Transfer')
                        })

                        it('should have the correct from', async () => {
                            assert.equal(tx.logs[0].args.from, owner)
                        })

                        it('should have the correct to', async () => {
                            assert.equal(tx.logs[0].args.to, spender)
                        })

                        it('should have the correct tokens', async () => {
                            assert.equal(tx.logs[0].args.tokens.toString(), '1')
                        })
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

                    describe('the event logs', async () => {
                        it('should contain one event', async () => {
                            assert.equal(tx.logs.length, 1)
                        })

                        it('should contain an Transfer event', async () => {
                            assert.equal(tx.logs[0].event, 'Transfer')
                        })

                        it('should have the correct from', async () => {
                            assert.equal(tx.logs[0].args.from, owner)
                        })

                        it('should have the correct to', async () => {
                            assert.equal(tx.logs[0].args.to, spender)
                        })

                        it('should have the correct tokens', async () => {
                            assert.equal(tx.logs[0].args.tokens.toString(), '1')
                        })
                    })
                })
            })

            describe('the spender transfers more than there balance to the owner', async () => {
                it('should throw', async () => {
                    assertActionThrows(async () => {
                        await token.transfer(owner, web3.utils.toBN(1), {
                            from: spender
                        })
                    })
                })
            })
        })

        context('transferFrom', async () => {
            describe('a spender transfers 1 from an owner that has set their approval to 1', async () => {
                let tx

                beforeEach(async () => {
                    await token.approve(spender, web3.utils.toBN(1), {
                        from: owner
                    })
                    tx = await token.transferFrom(owner, spender, web3.utils.toBN(1), {
                        from: spender
                    })
                })

                it('should have decreased the owner\'s balance by 1', async () => {
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

                describe('the event logs', async () => {
                    it('should contain one event', async () => {
                        assert.equal(tx.logs.length, 1)
                    })

                    it('should contain an Transfer event', async () => {
                        assert.equal(tx.logs[0].event, 'Transfer')
                    })

                    it('should have the correct from', async () => {
                        assert.equal(tx.logs[0].args.from, owner)
                    })

                    it('should have the correct to', async () => {
                        assert.equal(tx.logs[0].args.to, spender)
                    })

                    it('should have the correct tokens', async () => {
                        assert.equal(tx.logs[0].args.tokens.toString(), '1')
                    })
                })
            })

            describe('spender attempts to spend more than their approval', async () => {
                it('should throw', async () => {
                    assertActionThrows(async () => {
                        await token.transferFrom(owner, web3.utils.toBN(1), {
                            from: spender
                        })
                    })
                })
            })
        })
    })
})