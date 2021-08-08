import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'


class Description extends Component {
    constructor() {
        super()
        this.State = {
            candidates: [],
            view: "display",
            active: true,
            minted : "",
            cast : "",
            leader : "",
            leaderVotes : ""
        }
    }

    
    render() {


        return (
            <div>
                <div>
                    <Container maxWidth="sm">
                        <Typography
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom >
                            NFT Voting
                        </Typography>

                        <Typography
                            variant='h5'
                            align='center'
                            color='textSecondary'
                            paragraph>

                            Use your Non-Fungible Ballot Tokens to vote for your Favourite Candidate!
                        </Typography>
                    </Container>
                </div>



            </div>
        )
    }
}
export default Description

