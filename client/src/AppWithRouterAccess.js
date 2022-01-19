import React from 'react';
import { Box } from '@material-ui/core'
import { Switch, Route , useHistory} from 'react-router-dom';


import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
//components
import Header from './components/Header';
import Home from './components/home/Home';
import Detail from './components/post/Detail';
import Create from './components/post/Create';
import Update from './components/post/Update';
import Login from './components/account/Login';


const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess= () =>{

    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (
        
            <Security
                oktaAuth={oktaAuth}
                onAuthRequired={customAuthHandler}
                restoreOriginalUri={restoreOriginalUri}
            >

                <SecureRoute path="/" component={Header} />

                <Box style={{ marginTop: 64 }}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                        <Route path='/login/callback' component={LoginCallback} />

                        <Route exact path='/details/:id' component={Detail} />
                        <Route exact path='/create/:category?' component={Create} />
                        <Route exact path='/update/:id' component={Update} />
                    </Switch>

                </Box>
            </Security>
        

    );
}

export default AppWithRouterAccess;