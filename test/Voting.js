const { expect } = require("chai")
const { ethers } = require("hardhat")


describe("Voting dApp", function () {

    //assigning global variables to be used within the unit tests
    let owner;
    let cand1;
    let cand2;
    let cand3;
    let voter1;
    let voter2;
    let voter3;
    let voters;

    let Voting;
    let NFTVoting;

    //beforeEach will be executed before every unit test
    beforeEach(async function () {
        //linking the contract ABI
        Voting = await ethers.getContractFactory("MyToken");
        //deconstructing array into owner, candidates and voters
        //signers returns an array of 20 signers on the hardhat testing node
        //the address at index 0 is the owner's address

        [owner, cand1, cand2, cand3, voter1, voter2, voter3, ...voters] = await ethers.getSigners();
        
        NFTVoting = await Voting.deploy();
        
        //adding three 
        await NFTVoting.addCandidates(cand1.address);
        await NFTVoting.addCandidates(cand2.address);
        await NFTVoting.addCandidates(cand3.address);

        await NFTVoting.safeMint(voter1.address);
        await NFTVoting.safeMint(voter2.address);
        await NFTVoting.safeMint(voter3.address);

    });


    describe("Testing deployment, safeMint and balanceOf ", function () {
        it("Minting a ballot and transfering it to an address on the network", async function () {
            expect(await NFTVoting.balanceOf(voter1.address)).to.equal(1);
        });

        it("Attempting to send a voter a ballot twice", async function () {
            await expect(NFTVoting.safeMint(voter1.address)).to.be.revertedWith("Ballot Found");
        });
    });


    describe("Adding Candidates", function () {
        it("Checking if a candidate exists", async function () {
            expect (await NFTVoting.candidates(0)).to.equal(cand1.address);
        });

        it("Failing to add an existing candidate", async function () {
            await expect (NFTVoting.addCandidates(cand1.address)).to.be.revertedWith("Candidate Exists");
        });
    });

    
    describe("Voting", function () {
        it("Placing a valid vote for a candidate", async function () {
            await NFTVoting.connect(voter1).vote(cand1.address);
            expect(await NFTVoting.votesForCandidate(cand1.address)).to.equal(1);
        });
-
        it("Failed vote without a ballot", async function () {
            await NFTVoting.connect(voter1).vote(cand1.address);
            
            await expect(NFTVoting.connect(voter1).vote(cand1.address)).to.be.revertedWith("No Ballots");
        });

        
    });


    //unit test template
    describe("Testing conclude", function () {
        it("", async function () {
            
        });

        
    });

    

    

});

// //unit test template
    // describe("Adding Candidates", function () {
    //     it("", async function () {
            
    //     });

        
    // });

    


