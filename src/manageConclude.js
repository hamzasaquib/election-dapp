import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';
import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CheckBox from '@material-ui/core/Checkbox'


class ManageConclude extends Component {

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
                        <Typography align="center" variant="h3">Conclude Election</Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} align="center">
                        <CheckBox
                            checked={this.props.currentState.concludeCheck}
                            onChange={this.props.formHandler}
                            name="concludeCheck"
                            color="primary"
                            label="When you press conclude, no more votes will be accepted"
                        />
                        <Typography align="center" variant="subtitle1">*When you press conclude, no more votes will be accepted</Typography>
                    </Grid>

                </Grid>
                <Box textAlign='center'>
                    <MyButton id="concludeButton" size="medium" onClick = {this.props.onChainHandler}>Conclude</MyButton>
                </Box>
            </div>
        )

    }
}
export default ManageConclude
