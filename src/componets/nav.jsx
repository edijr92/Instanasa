import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" color='secondary'>
                <Toolbar>

                    <Typography variant="h6" className={classes.title} component='div'>
                        <Box fontStyle='italic' >InstaNasa</Box>
                    </Typography>
                    <IconButton color="inherit" aria-label="menu">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="menu">
                        <LinkedInIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}