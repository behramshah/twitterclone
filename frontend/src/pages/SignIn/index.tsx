import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Button, Typography} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';

export default function SignIn() {

  const theme = useTheme();

  const useStylesSignIn = makeStyles<any>()((theme) => ({
    wrapper: {
      display: 'flex',
      height: '100vh',
    },
    blueSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#71C9F8',
      flex: '0 0 50%',
      overflow: 'hidden',
      position: 'relative',
    },
    blueSideBigIcon: {
      position: 'absolute',
      left: '50%',
      top: '53%',
      transform: 'translate(-50%, -50%)',
      width: '260%',
      height: '260%',
    },
    blueSideListInfo: {
      position: 'relative',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: 380,
      '& h6': {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: 20,
      },
    },
    blueSideListInfoItem: {
      marginBottom: 40,
    },
    blueSideListInfoIcon: {
      fontSize: 32,
      marginRight: 15,
    },
    loginSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
      fontSize: 45,
    },
    loginSideWrapper: {
      width: 380,
    },
    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 60,
      marginTop: 20,
    },
    loginSideField: {
      marginBottom: 18,
    },
    registerField: {
      marginBottom: theme.spacing(5),
    },
    loginFormControl: {
      marginBottom: theme.spacing(2),
    },  
  }));  

  const { classes } = useStylesSignIn(theme);
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Read anything you want
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Learn new from all over the world
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Join to conversation
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
            What is happening in the world ?
          </Typography>
          <Typography>
            <b>Join twitter now!</b>
          </Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth>
            Register
          </Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            Sign in
          </Button>
          <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} classes={classes} />
          <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} classes={classes} />
        </div>
      </section>
    </div>
  );
}