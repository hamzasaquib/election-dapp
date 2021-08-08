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


                        <Grid item xs={12} sm={12}>
                            <Typography align="center" variant="h2">Winner</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography align="center" variant="h4">{this.props.item.leader}</Typography>

                        </Grid>
                        <Grid item xs={12} sm = {12}>
                            <Typography align="center" variant="h4">{this.props.item.leaderVotes}</Typography>
                            {/* <Typography align="center" variant="h6">{this.props.item.leader}</Typography>
                            <Typography align="center" variant="h5">{this.props.item.leaderVotes}</Typography> */}

                        </Grid>


                    </Grid>
                  
                </Container>
            </div >
        )
    }


}



export default Conclude