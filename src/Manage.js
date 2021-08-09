import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ManageMint from "./ManageMint"
import ManageCandidates from './ManageCandidates';
import ManageConclude from './ManageConclude';


class Manage extends Component {



    render(props) {

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
                        <AdminButton id="user" onClick={this.props.handler}>View</AdminButton>
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
                                <Button id="mint" onClick={this.props.displayHandler}>
                                    Mint
                                </Button>

                                <Button id="candidates" onClick={this.props.displayHandler}>
                                    Candidates
                                </Button>
                                <Button id="conclude" onClick={this.props.displayHandler}>
                                    Conclude
                                </Button>

                            </ButtonGroup>
                        </Grid>
                    </Grid>

                    {this.props.currentState.mint && <ManageMint currentState={this.props.currentState} formHandler={this.props.formHandler} />}
                    {this.props.currentState.candidates && <ManageCandidates currentState={this.props.currentState} formHandler={this.props.formHandler} />}
                    {this.props.currentState.conclude && <ManageConclude currentState={this.props.currentState} formHandler={this.props.formHandler} />}

                </Container>

            </div >
        )
    }


}



export default Manage