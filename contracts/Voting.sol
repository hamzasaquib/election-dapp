// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./@openzeppelin-contracts/token/ERC721/ERC721.sol";
import "./@openzeppelin-contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "./@openzeppelin-contracts/access/Ownable.sol";
import "./@openzeppelin-contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    address[] public candidates;
    address public winner;
    bool active = true;

    //election conclusion event
    event concluded(address x, uint256 y);

    constructor() ERC721("Ballot", "BAL") {}

    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    //a function to check if any address passed is a candidate
    function _isCandidate(address _candidateAddress)
        internal
        view
        returns (bool)
    {
        uint8 candidatesLength = uint8(candidates.length);
        for (uint256 i = 0; i < candidatesLength; i++) {
            if (_candidateAddress == candidates[i]) {
                return true;
            }
        }
        return false;
    }

    //concluding the election and determining the winner
    function conclude() external onlyOwner() {
        active = false;
        uint256 votes;
        (winner, votes) = highestVotes();
        emit concluded(winner, votes);
    }

    //calculating the highest votes
    function highestVotes() public view returns (address, uint256) {
        uint8 candidatesLength = uint8(candidates.length);
        uint256 highest = balanceOf(candidates[0]);
        uint8 pointer = 0;

        //iterating through candidates
        for (uint8 i = 1; i < candidatesLength; i++) {
            uint256 voteCount = balanceOf(candidates[i]);
            if (voteCount > highest) {
                pointer = i;
                highest = voteCount;
            }
        }

        //checking for a draw
        //counting occurance of highest votes
        uint8 occurance = 0;

        for (uint8 i = 0; i < candidatesLength; i++) {
            uint256 voteCount = balanceOf(candidates[i]);

            if (voteCount == highest) {
                occurance++;
            }
            if (occurance > 1) {
                //if more than one candidate has the highest votes
                //there wil be no winner and function returns
                //a zero address
                return (0x0000000000000000000000000000000000000000, highest);
            }
        }

        return (candidates[pointer], highest);
    }

    //returning the votes for a candidate
    function votesForCandidate(address _candidateAddress)
        public
        view
        returns (uint256)
    {
        require(
            _isCandidate(_candidateAddress) == true,
            "Candidate Doesn't Exist"
        );

        return balanceOf(_candidateAddress);
    }

    //adding candidates to the candidates array
    function addCandidates(address _candidate) external onlyOwner {
        require(_isCandidate(_candidate) == false, "Candidate Exists");

        candidates.push(_candidate);
    }
}
