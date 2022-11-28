import React from 'react';
import { BackButton } from '../components/BackButton';

import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';


export const UserPage = () => {
  const theme = useTheme();

  const useUserPageStyles = makeStyles<any>()((theme) => ({      
    tweetsWrapper: {
      borderRadius: 0,
      minHeight: '100vh',
      borderTop: '0',
      borderBottom: '0',
    },
    tweetsHeader: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      borderTop: '0',
      borderLeft: '0',
      borderRight: '0',
      borderRadius: 0,
      padding: '10px 15px',
      '& h6': {
        fontWeight: 800,
      },
    },       
  }));

  const { classes } = useUserPageStyles(theme);

  return (
    <Paper className={classes.tweetsWrapper} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <BackButton />

        <div>
          <Typography variant="h6">Bahram Jabbarov</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            65 twits
          </Typography>
        </div>
      </Paper>
    </Paper>
  );
};
