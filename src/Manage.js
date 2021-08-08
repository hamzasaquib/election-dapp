import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Manage extends Component {



    render(props) {

        const AdminButton = styled(Button)({
            background: 'linear-gradient(30deg, #6699cc 30%, #6f9dbe 70%)',
            border: 0,
            borderRadius: 1,
            color: 'white',
            height: 30,
            minWidth: '75px'
        })


        return (
            <div>
                <Container
                    maxWidth='sm'

                >
                    <Box textAlign='center'>
                        <AdminButton id="voteView"  onClick={this.props.handler}>View</AdminButton>
                    </Box>
                    <br />
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >


                        <Grid item xs={12} sm={12}>
                            <ButtonGroup
                                color="default"
                                fullWidth={true}

                            >
                                <Button>
                                    Mint
                                </Button>

                                <Button>
                                    Candidates
                                </Button>
                                <Button>
                                    Conclude
                                </Button>

                            </ButtonGroup>
                        </Grid>



                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h6">Admin things</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h6">Votes Cast</Typography>

                        </Grid>
                        <Grid item xs={12} >
                            <Typography align="center" variant="h4">Leading</Typography>

                        </Grid>


                    </Grid>

                </Container>
            </div >
        )
    }


}



export default Manage