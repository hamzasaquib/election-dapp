import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';




class Vote extends Component {


    render(props) {

        const candidates = this.props.currentState.electionCandidates.map(candidate => {
            return (
                <MenuItem value={candidate} key={candidate}>{candidate}</MenuItem>)
        })

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
                            <Typography align="center" variant="h4">{this.props.currentState.minted}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h6">Votes Cast</Typography>
                            <Typography align="center" variant="h4">{this.props.currentState.cast}</Typography>

                        </Grid>
                        <Grid item xs={12} >
                            <Typography align="center" variant="h6">Current Leader</Typography>
                            <Typography align="center" variant="subtitle1">{this.props.currentState.leader}</Typography>

                            <Typography align="center" variant="h6">{this.props.currentState.leaderVotes} Votes</Typography>

                        </Grid>
                        <Grid item xs={12} >
                            <Box textAlign='center'>
                                <InputLabel>Select Candidate</InputLabel>
                                <Select
                                    id="voterSelect"
                                    name="selectedCandidate"
                                    value={this.props.currentState.selectedCandidate}
                                    onChange={this.props.formHandler}

                                >

                                    {candidates}
                                </Select>
                            </Box>
                        </Grid>

                    </Grid>
                    <Box textAlign='center'>
                        <MyButton id="voteButton" onClick={this.props.onChainHandler}>Vote</MyButton>
                        <br /><br />
                        <Typography variant="subtitle2" >{this.props.currentState.voteWorking && "Working..."}</Typography>

                    </Box>
                </Container>
            </div >
        )
    }


}



export default Vote