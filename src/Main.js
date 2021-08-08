import React, { Component } from 'react'
import Description from "./Description"
import Header from "./Header"
import Conclude from "./Conclude"
import Vote from "./Vote"
import Manage from "./Manage"


class Main extends Component {
    constructor() {
        super()
        this.state = {
            active: true,
            minted: '40',
            cast: '10',
            leader: "Hamza",
            leaderVotes: '10',
            viewMode: "user",
            view: "user"
        }
        this.handleClickDisplay = this.handleClickDisplay.bind(this)
    }

    handleClickDisplay(event) {
        this.setState({
            view: event.target.parentElement.id

        })

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

                /> : <Manage handler={this.handleClickDisplay} />}


            </div>
        )
    }
}
export default Main