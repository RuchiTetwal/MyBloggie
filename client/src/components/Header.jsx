import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black',

    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }

    },
    link: { textDecoration: 'none', color: 'inherit' }
})



const Header = () => {
    const classes = useStyles();

    const history = useHistory();

    const { oktaAuth, authState } = useOktaAuth();

    if (authState && authState.isPending) return null;


    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ?
        <Button onClick={logout} style={{
            background: 'unset',
            border: 'none',
            fontSize: 17,
            textTransform: 'uppercase',
            fontFamily: 'Roboto',
            cursor: 'pointer',
            opacity: 0.8
        }}>LOGOUT</Button> :
        <Button onClick={login}>LOGIN</Button>;

    return (
        <>
            <AppBar className={classes.component}>
                <Toolbar className={classes.container}>
                    <Link to='/' className={classes.link}>
                    HOME
                    </Link>
                    <Link>
                        {button}
                    </Link>
                    
                </Toolbar>

            </AppBar>
        </>
    )

}

export default Header;