const { expect } = require("chai")
const { ethers } = require("hardhat")


describe("Voting dApp", function () {

    //assigning global variables to be used within the unit tests
    let owner;
    let addr1;
    let addr2;
    let addrs;

    let Voting;
    let NFTVoting;

    //beforeEach will be executed before every unit test
    beforeEach(async function () {
        //linking the contract ABI
        Voting = await ethers.getContractFactory("MyToken");
        //deconstructing array
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        NFTVoting = await Voting.deploy();
    });

    describe("Testing deployment, safeMint and balanceOf ", function () {
        it("Minting a ballot and transfering it to an address on the network", async function () {
            await NFTVoting.safeMint(addr1.address);
            expect(await NFTVoting.balanceOf(addr1.address)).to.equal(1);
        });
    });

    describe("Adding Candidates", function () {
        it("Adding a valid candidate", async function () {
            await NFTVoting.addCandidates(addr1.address);
            expect (await NFTVoting.candidates(0)).to.equal(addr1.address);
        });
    });

    

});

    


