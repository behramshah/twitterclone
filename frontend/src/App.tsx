import React from 'react';
import SignIn from './pages/SignIn';
import { Home } from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
