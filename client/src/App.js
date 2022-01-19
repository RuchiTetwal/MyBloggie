import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppWithRouterAccess from './AppWithRouterAccess'
import ContextProvider from './context/ContextProvider';
//components
//import Header from './components/Header';
//import Home from './components/home/Home';
//import Detail from './components/post/Detail';
//import Create from './components/post/Create';
//import Update from './components/post/Update';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <AppWithRouterAccess/>
       {/* <Header/>

       <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/details/:id' component={Detail}/>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/update/:id' component={Update}/>
        </Switch>
        
       </Box> */}
     </BrowserRouter> 
    </ContextProvider>
   
  );
}

export default App;
