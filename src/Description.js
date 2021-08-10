import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'


class Description extends Component {

    render() {
        return (
            <div>
                <div>
                    <Container maxWidth="sm">
                        <br/>
                        <br/>
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

                            Use your NFT Ballot to vote for your candidate!
                        </Typography>
                    </Container>
                </div>



            </div>
        )
    }
}
export default Description

