import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { LayoutPage } from './pages/Layout';
import { Home } from './pages/Home';
import { UserPage } from './pages/User';
import { CssBaseline } from '@mui/material';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';



function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      // history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [isAuth]);

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
