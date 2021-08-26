import React, { Component } from 'react'
import Description from "./Description"
import Header from "./Header"
import Conclude from "./Conclude"
import Vote from "./Vote"
import Manage from "./Manage"
import { ethers } from 'ethers'

//importing smart contract ABI
import NFTVoting from "./artifacts/contracts/Voting.sol/NFTVoting.json"

//address of smart contract
const votingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

class Main extends Component {
    constructor() {
        super()
        this.state = {

            //controls rendering of manage and its children components
            view: 'user',
            candidates: true,
            conclude: false,

            //variables for controlled form components within the manage section
            //conclude
            concludeCheck: false,

            //candidates
            candidateAddress: "",
            candidateWorking: false,

            //minting
            ethAddresses: "",
            mintWorking: false,

            //vote selection
            selectedCandidate: "",
            voteWorking: false,


            //data from smart contract API
            active: true,
            electionCandidates: [],
            minted: '',
            cast: '',
            leader: '',
            leaderVotes: '',


        }
        this.handleClickDisplay = this.handleClickDisplay.bind(this)
        this.onChainHandler = this.onChainHandler.bind(this)
        this.formHandler = this.formHandler.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    async requestAccount() {
        //requests the client to give access to their meta mask account's data
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    async fetchData() {

        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(votingAddress, NFTVoting.abi, provider)



            try {
                //adding 1 to count since counter is initialized with 0
                const votes = (await contract.total()).toNumber() + 1
                let [candidate, count] = await contract.highestVotes()
                const allCandidates = await contract.allCandidates()
                const totalVotes = (await contract.totalVotesCast()).toString()
                const status = await contract.active()


                this.setState({
                    minted: votes,
                    leader: candidate,
                    leaderVotes: count.toString(),
                    electionCandidates: allCandidates,
                    cast: totalVotes,
                    active: status

                })
            }
            catch (err) {
                console.log('Error:', err.message)
            }
        }
    }

    async addCandidate(addressToAdd) {
        if (!addressToAdd) return

        if (typeof window.ethereum !== 'undefined') {
            this.setState({ candidateWorking: true })
            await this.requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(votingAddress, NFTVoting.abi, signer)

            try {
                const transaction = await contract.addCandidates(addressToAdd)
                await transaction.wait()
            }
            catch (err) {
                console.log('Error:', err.message)
            }


        }
        this.fetchData()
        this.setState({ candidateWorking: false })


    }

    async mintTokens(addressToMint) {
        if (!addressToMint) return
        if (typeof window.ethereum !== 'undefined') {

            this.setState({ mintWorking: true })
            await this.requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(votingAddress, NFTVoting.abi, signer)

            if (addressToMint.length > 43) {
                contract.once("minted", (minted) => {

                    console.log(minted);
                })

                try {
                    const arrayOfAddresses = addressToMint.split(",")
                    console.log(arrayOfAddresses)
                    const transaction = await contract.safeMintMany(arrayOfAddresses)
                    await transaction.wait()
                }
                catch (err) {
                    console.log('Error:', err.message)
                }
            }

            else {
                try {
                    const transaction = await contract.safeMint(addressToMint)
                    await transaction.wait()
                }
                catch (err) {
                    console.log('Error:', err.message)
                }
            }
        }


        this.fetchData()
        this.setState({ mintWorking: false })

    }



    async conclude() {
        if (!this.state.concludeCheck) return
        if (typeof window.ethereum !== 'undefined') {
            await this.requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(votingAddress, NFTVoting.abi, signer)

            try {
                const transaction = await contract.conclude()
                await transaction.wait()
            }
            catch (err) {
                console.log('Error:', err.message)
            }


        }
        this.fetchData()


    }

    async sendVote(candidateToVote) {

        if (!candidateToVote) return

        if (typeof window.ethereum !== 'undefined') {
            this.setState({ voteWorking: true })
            await this.requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(votingAddress, NFTVoting.abi, signer)

            try {

                const transaction = await contract.vote(candidateToVote)
                await transaction.wait()
                alert("Success!")

            }
            catch (err) {
                console.log('Error:', err.message)
            }
            this.fetchData()
            this.setState({ voteWorking: false })

        }
    }
    //function to handle writing data to the blockchain
    onChainHandler(event) {
        const { parentElement } = event.target

        if (parentElement.id === "voteButton") {
            this.sendVote(this.state.selectedCandidate)

        }
        if (parentElement.id === "mintButton") {
            this.mintTokens(this.state.ethAddresses)
        }

        else if (parentElement.id === "addCandidateButton") {
            this.addCandidate(this.state.candidateAddress)
        }
        else if (parentElement.id === "concludeButton") {
            this.conclude()

        }

    }



    handleClickDisplay(event) {
        const { parentElement } = event.target


        parentElement.id === 'mint' ?
            this.setState({
                mint: true,
                candidates: false,
                conclude: false
            })
            :
            parentElement.id === 'candidates' ? this.setState({
                mint: false,
                candidates: true,
                conclude: false

            }
            )
                :
                parentElement.id === 'conclude' ? this.setState({
                    mint: false,
                    candidates: false,
                    conclude: true
                })
                    :
                    this.setState({
                        view: parentElement.id


                    })

    }



    formHandler(event) {
        const { name, value, checked } = event.target
        name === "concludeCheck" ?
            this.setState({ [name]: checked })
            :
            this.setState({ [name]: value })

    }

    componentDidMount() {

        this.requestAccount()
        this.fetchData()
    }


    render() {
        return (
            <div>
                <Header />

                {this.state.active && <Description />}

                {!this.state.active ?

                    <Conclude
                        currentState={this.state} /> :




                    this.state.view === "user" ? <Vote
                        currentState={this.state}
                        handler={this.handleClickDisplay}
                        formHandler={this.formHandler}
                        onChainHandler={this.onChainHandler}
                    />
                        :
                        <Manage onChainHandler={this.onChainHandler} formHandler={this.formHandler} displayHandler={this.handleClickDisplay} currentState={this.state} />
                }




            </div>
        )
    }
}
export default Main