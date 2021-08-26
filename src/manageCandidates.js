import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';




class ManageCandidates extends Component {

    render() {
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
        return (
            <div>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12}>
                        <Typography align="center" variant="h4" style={{marginTop: "5px"}}>Add Candidates</Typography>
                    </Grid>



                    <Grid item xs={6} sm={6}>
                        <Typography align="right" variant="subtitle1">Candidate Address:</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Box align="left">
                            <TextField
                                name="candidateAddress"
                                value={this.props.currentState.candidateAddress}
                                placeholder="0x0"
                                onChange={this.props.formHandler}
                            /> </Box>
                    </Grid>

                    



                </Grid>
                <Box textAlign='center'>
                    <MyButton id="addCandidateButton" onClick = {this.props.onChainHandler}>Add Candidate</MyButton>
                    
                    <br /><br />
                    <Typography variant="subtitle2" >{this.props.currentState.candidateWorking && "Working..."}</Typography>
                </Box>
            </div>
        )

    }
}
export default ManageCandidates
