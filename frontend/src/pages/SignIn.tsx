import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Button, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SignIn() {

  const theme = useTheme();

  const useStyles = makeStyles<any>()((theme) => ({
    wrapper: {
      height: '100vh',
      display: 'flex',
    },
    blueSide: {
      'background-color': '#1DA1F2',
      flex: '0 0 50%',
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
    },
    loginSideTwitterIcon: {
      fontSize: '45px',
    },
  
  }));
  

  const { classes } = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <ul>
          <li>
            <Typography>Read intersting things</Typography>
          </li>
          <li>
            <Typography>Don’t miss what’s happening</Typography>
          </li>
          <li>
            <Typography>People on Twitter are the first to know.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div>
          <TwitterIcon className={classes.loginSideTwitterIcon} color='primary'/>
          <Typography>New to Twitter?</Typography>
          <Typography>Sign up now to get your own personalized timeline!</Typography>
          <Button className={classes.button} variant='contained' color='primary' fullWidth >Sign up</Button>
          <Button className={classes.button} variant='outlined' color='primary' fullWidth >Log in</Button>
        </div>
      </section>
    </div>
  );
}