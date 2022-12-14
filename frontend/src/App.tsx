import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { LayoutPage } from './pages/Layout';
import { Home } from './pages/Home';
import { UserPage } from './pages/User';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';




function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;


  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else {
      history.push('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isReady]);

  React.useEffect(() => {
    const el = document.querySelector('#avatar');

    if (el) {
      el.addEventListener('change', () => {
        const avatar = document.getElementById('avatar');
        if (avatar) {
          // @ts-ignore
          let photo = avatar.files[0];
          let req = new XMLHttpRequest();
          let formData = new FormData();

          formData.append('avatar', photo);
          req.open('POST', '/upload');
          req.send(formData);
        }
      });
    }
  }, []);


  if (!isReady) {
    return (
      <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',}}>
        <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
      </div>
    );
  }

  return (
    <div className="App">
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
