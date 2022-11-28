import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Button, Typography, TextField,FormControl, FormGroup   } from '@mui/material';

import Box from '@mui/material/Box'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import { ModalBlock } from '../components/modalblock';

export default function SignIn() {

  const theme = useTheme();

  const useStyles = makeStyles<any>()((theme) => ({
    wrapper: {
      height: '100vh',
      display: 'flex',
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
    button: {
      fontSize: '16px',
      'border-radius': '25px',
      marginBottom: '10px'
    },
    loginSideTwitterIcon: {
      fontSize: '45px',
    },
    loginSideWrapper: {
      width: '380px',
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
  

  const { classes } = useStyles(theme);

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
      <Box className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Read intersting things
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Don’t miss what’s happening
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              People on Twitter are the first to know.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon className={classes.loginSideTwitterIcon} color='primary'/>
          <Typography className={classes.loginSideTitle} variant='h4' gutterBottom>New to Twitter?</Typography>
          <Typography variant='h6' gutterBottom>Sign up now to get your own personalized timeline!</Typography>
          <Button onClick={handleClickOpenSignUp} className={classes.button} variant='contained' color='primary' fullWidth >Sign up</Button>
          <Button onClick={handleClickOpenSignIn} className={classes.button} variant='outlined' color='primary' fullWidth >Log in</Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Log in">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color='primary' fullWidth>
                  Log in
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Sign up">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color='primary' fullWidth>
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </Box>
    </div>
  );
}