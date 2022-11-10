import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

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
      flex: '0 0 50%',
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
            <Typography>Learn news all around the world</Typography>
          </li>
          <li>
            <Typography>Communicate with friends</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
      </section>
    </div>
  );
}