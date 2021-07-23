// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./@openzeppelin-contracts/token/ERC721/ERC721.sol";
import "./@openzeppelin-contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "./@openzeppelin-contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./@openzeppelin-contracts/access/Ownable.sol";
import "./@openzeppelin-contracts/utils/Counters.sol";

/// @author Muhammad Hamza Saquib Malik
/// @title a simple voting application using NFTs for ballots


contract MyToken is ERC721, ERC721Burnable, Ownable {

    //counter allows for unique UUIDs on each ballot
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    //election conclusion event
    event concluded(address x, uint256 y);
    
    //election state
    bool public active = true;
    
    //mappings for ownership    
    mapping(address => uint256) internal _ballotId;
    address[] public candidates;
    address public winner;
    
    //constructor
    constructor() ERC721("Ballot", "BAL") {}

    ///safeMint function is part of the openZeppelin library
    ///@dev Altered safeMint to store maintain a global mapping, addresses=>UUIDs to conduct checks
    ///@notice Added a check to make sure no user gets two ballots
    
      function safeMint(address to) public onlyOwner {
          require(balanceOf(to) == 0,"Ballot Found");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _ballotId[to] = tokenId; 
        _tokenIdCounter.increment();
    }

     ///@notice adding candidates to the candidates array
     function addCandidates(address _candidate) external onlyOwner {
        require(_isCandidate(_candidate) == false, "Candidate Exists");

        candidates.push(_candidate);
    }


    ///@notice Internal function to check whether an address is a candidate
    function _isCandidate(address _candidateAddress)
        internal
        view
        returns (bool)
    {   
        uint8 _candidatesLength = uint8(candidates.length);
        for (uint8 i = 0; i < _candidatesLength; i++) {
            if (_candidateAddress == candidates[i]) {
                return true;
            }
        }
        return false;
    }


    ///@notice concluding the election and determining the winner
    function conclude() external onlyOwner() {
        active = false;
        uint256 _votes;
        (winner, _votes) = highestVotes();
        emit concluded(winner, _votes);
    }


    ////@notice calculating the highest votes
    ///@return candidate address with highest votes and its balance
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
                ///@dev there wil be no winner and function returns a zero address
                return (0x0000000000000000000000000000000000000000, highest);
            }
        }

        return (candidates[pointer], highest);
    }
    

    ///@param _candidateAddress must be a valid candidate address
    ///@return votes for candidate
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

     
    ///@notice The Vote function aids voters in sending Ballots
    ///@dev checks for a valid candidate address, voter account balance and whether the voter is a candidate
    ///@param _candidateAddress must be a valid candidate address
    function vote(address _candidateAddress) external{
        //checking if election is still ongoing
        require(active == true,"Concluded");
        //checking if msg.sender has any ballots
        require(balanceOf(msg.sender) > 0, "No Ballots");
        //checking if address in argument is a candidate address
        require(_isCandidate(_candidateAddress)==true,"Invalid Candidate");
        //checking if msg.sender is a candidate
        require(_isCandidate(msg.sender)==false,"Candidates Cannot Vote");
        uint256 tokenId = _ballotId[msg.sender];
        safeTransferFrom(msg.sender, _candidateAddress, tokenId);
    }

}
