import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { CssBaseline } from '@material-ui/core'
import HowToVoteIcon from '@material-ui/icons/HowToVote';

function Header() {
    return (
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <HowToVoteIcon />
                    <Typography variant='h6'>
                        NFTVoting - 2021
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;