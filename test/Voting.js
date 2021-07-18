const { expect } = require("chai")
const { ethers } = require("hardhat")



describe("Voting Contract ", function () {
    it("Testing deployment and minting", async function () {

        const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        
       
        const Voting = await ethers.getContractFactory("MyToken")

        const NFTVoting = await Voting.deploy()

        await NFTVoting.safeMint(addr1.address)

        expect(await NFTVoting.balanceOf(addr1.address)).to.equal(1)
    })
})

