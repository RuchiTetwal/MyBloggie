import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    appbar:{
        background: '#FFFFFF',
        color: 'black'
    },
    toolbar:{
        justifyContent: 'center',
        '& > *':{
            padding:20
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})

const Header = () => {
    const classes = useStyles();
    return(
        <AppBar className={classes.appbar}>
            <Toolbar className = {classes.toolbar}>
                <Link className ={classes.link} to='/'><Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;