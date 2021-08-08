import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

class Vote extends Component {
    


    render(props) {
        const MyButton = styled(Button)({
            background: 'linear-gradient(30deg, #6699cc 30%, #6f9dbe 70%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 0 1px 1px  #29465b ',
            color: 'white',
            height: 48,
            marginTop: '30px',
            padding: '0 30px',
        })

        const AdminButton = styled(Button)({
            background: 'linear-gradient(30deg, #6699cc 30%, #6f9dbe 70%)',
            border: 0,
            borderRadius: 1,
            color: 'white',
            height: 30,
            minWidth: '80px'
        })



        return (
            <div>
                <Container
                    maxWidth='sm'

                >
                    <Box textAlign='center'>
                        <AdminButton id="admin" onClick={this.props.handler}>Manage</AdminButton>
                    </Box>
                    <br />

                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >


                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h6">Votes Minted</Typography>
                            <Typography align="center" variant="h4">{this.props.item.minted}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h6">Votes Cast</Typography>
                            <Typography align="center" variant="h4">{this.props.item.cast}</Typography>

                        </Grid>
                        <Grid item xs={12} >
                            <Typography align="center" variant="h4">Leading</Typography>
                            <Typography align="center" variant="h6">{this.props.item.leader}</Typography>
                            <Typography align="center" variant="h5">{this.props.item.leaderVotes}</Typography>

                        </Grid>


                    </Grid>
                    <Box textAlign='center'>
                        <MyButton >Vote</MyButton>
                    </Box>
                </Container>
            </div >
        )
    }


}



export default Vote