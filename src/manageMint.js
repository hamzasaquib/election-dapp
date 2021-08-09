import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';




class ManageMint extends Component {

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
        return (
            <div>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12}>
                        <Typography align="center" variant="h2">Minting</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography align="center" variant="subtitle1">Enter Comma Seperated Voter Addresses</Typography>

                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box textAlign='center'>
                            <TextField onChange = {this.props.formHandler}
                                name = "ethAddresses"
                                label="ETH Addressses"
                                multiline
                                placeholder="0x0,0x0"
                                variant="outlined"
                                align="center"
                                value = {this.props.currentState.ethAddresses}
                            />
                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={12}>
                        {/* {this.props.item.leaderVotes} */}
                        <Typography align="center" variant="subtitle2">Total Votes Minted: {this.props.currentState.minted}</Typography>
                        <Box textAlign='center'>
                            <MyButton id="mint" >MINT</MyButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <Typography align="center" variant="subtitle2">{this.props.currentState.mintWorking && "Minting..."}</Typography>

                    </Grid>




                </Grid>

            </div>
        )

    }
}
export default ManageMint
