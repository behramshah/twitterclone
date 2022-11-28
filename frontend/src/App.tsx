import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { LayoutPage } from './pages/Layout';
import { Home } from './pages/Home';
import { UserPage } from './pages/User';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Switch>
      <Route path="/signin" component={SignIn} exact />
        <LayoutPage>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </LayoutPage>
      </Switch>
    </div>
  );
}

export default App;
