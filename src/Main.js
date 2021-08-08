import React, { Component } from 'react'
import Description from "./Description"
import Header from "./Header"
import DisplayVotes from "./DisplayVotes"


class Main extends Component {
    constructor() {
        super()
        this.state={active : true}
    }
    render(){
        return (

            <div>
                <Header />
                <Description />

                <DisplayVotes
                item = {{
                    minted : '0',
                    cast : '0',
                    leader : "Hamza",
                    leaderVotes : '0'
                }}
                />
            </div>
        )
    }
}
export default Main