import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

class Conclude extends Component {
    


    render(props) {
        
        return (
            <div>
                <Container
                    maxWidth='sm'

                >
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >

                        <br/>
                        
                        <Grid item xs={12} sm={12}>
                            <Typography align="center" variant="h1" style={{paddingTop:'25px'}}>Concluded</Typography>
                            <br/>
                            <Typography align="center" variant="h2">Winner</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography align="center" variant="h5">{this.props.currentState.leader}</Typography>
                        </Grid>
                        <Grid item xs={12} sm = {12}>
                            <Typography align="center" variant="h5">Votes</Typography>
                            <Typography align="center" variant="h4">{this.props.currentState.leaderVotes}</Typography>
                                <br/>
                            <Typography align="center" variant="subtitle1">Total Votes Cast: {this.props.currentState.cast}</Typography>
                            <Typography align="center" variant="subtitle1">Total Votes Minted: {this.props.currentState.minted}</Typography>

                        </Grid>


                    </Grid>
                  
                </Container>
            </div >
        )
    }


}



export default Conclude