import React, { Component } from 'react'
import Description from "./Description"
import Header from "./Header"
// import Conclude from "./Conclude"
import Vote from "./Vote"
import Manage from "./Manage"



class Main extends Component {
    constructor() {
        super()
        this.state = {

            //controls rendering of manage and its children
            view: 'user',
            
            
            candidates: true,
            conclude: false,

            //controlled form components within the manage section
            //conclude
            concludeChecked : false,
            concludeWorking : false,

            //candidates
            candidateAddress : "",
            candidateName : "",
            candidateWorking: false,

            //minting
            ETHAddresses : [], 
            mintWorking: false,


            //data from smart contract API
            active: true,
            minted: '40',
            cast: '10',
            leader: 'Hamza',
            leaderVotes: '10',
            votesMinting: '0',

        }
        this.handleClickDisplay = this.handleClickDisplay.bind(this)
        this.onChainHandler = this.onChainHandler.bind(this)
        this.formHandler = this.formHandler.bind(this)
    }

    handleClickDisplay(event) {
        const {parentElement} = event.target

               

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
            })

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

    onChainHandler(event){
        const {name, value, id} = event.target
        console.log(name, value, id)
        
    }

    formHandler(event){
        console.log("handling some change")
    }
    render() {
        return (

            <div>
                <Header />
                <Description />

                {/* <Conclude

                    item={{
                        leader: this.state.leader,
                        leaderVotes : this.state.leaderVotes
                    }} /> */}

                {this.state.view === "user" ? <Vote
                    item={{
                        minted: this.state.minted,
                        cast: this.state.cast,
                        leader: this.state.leader,
                        leaderVotes: this.state.leaderVotes
                    }}
                    handler={this.handleClickDisplay}

                />
                    :
                    <Manage formHandler = {this.formHandler} displayHandler={this.handleClickDisplay} currentState={this.state} />}
               

            </div>
        )
    }
}
export default Main