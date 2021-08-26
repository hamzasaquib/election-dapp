// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Voting = await ethers.getContractFactory("NFTVoting");
  const NFTVoting = await Voting.deploy();

  await NFTVoting.deployed();

  [owner, cand1, cand2, cand3, voter1, ...voters] = await ethers.getSigners();

  //adding three candidates
  await NFTVoting.addCandidates(cand1.address);
  await NFTVoting.addCandidates(cand2.address);
  await NFTVoting.addCandidates(cand3.address);

  // for (const voter of voters) {
  //   const transaction = await NFTVoting.safeMint(voter.address)
  //   transaction.wait()
  // }


  // await NFTVoting.connect(voters[0]).vote(cand1.address);
  // await NFTVoting.connect(voters[1]).vote(cand2.address);
  // await NFTVoting.connect(voters[2]).vote(cand1.address);
  // await NFTVoting.connect(voters[3]).vote(cand1.address);
  // await NFTVoting.connect(voters[4]).vote(cand1.address);

  

  console.log("NFTVoting.sol deployed to:", NFTVoting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //npx hardhat run scripts/deploy.js --network localhost