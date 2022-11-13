import { Container, Grid,  InputBase, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

const SearchTextField = 
styled(InputBase)({
  borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
});

export const Home = () => {

  const theme = useTheme();
  const useHomeStyles = makeStyles<any>()((theme) => ({
    wrapper: {
      height: '100vh',
    },
    logo: {
      margin: '10px 0',
    },
    logoIcon: {
      fontSize: 36,
    },
    sideMenuList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: 230,
    },
    sideMenuListItem: {
      cursor: 'pointer',
      '&:hover': {
        '& div': {
          backgroundColor: 'rgba(29, 161, 242, 0.1)',
          '& h6': {
            color: theme.palette.primary.main,
          },
          '& svg path': {
            fill: theme.palette.primary.main,
          },
        },
      },
  
      '& div': {
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        padding: '0 25px 0 20px',
        borderRadius: 30,
        height: 50,
        marginBottom: 15,
        transition: 'background-color 0.1s ease-in-out',
      },
    },
    sideMenuListItemLabel: {
      fontWeight: 700,
      fontSize: 20,
      marginLeft: 15,
    },
    sideMenuListItemIcon: {
      fontSize: 32,
      marginLeft: -5,
    },
    sideMenuTweetButton: {
      padding: theme.spacing(3.2),
      marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
      borderRadius: 0,
      height: '100%',
      borderTop: '0',
      borderBottom: '0',
    },
    tweetsHeader: {
      borderTop: '0',
      borderLeft: '0',
      borderRight: '0',
      borderRadius: 0,
      padding: '10px 15px',
      '& h6': {
        fontWeight: 800,
      },
    },
    tweet: {
      cursor: 'pointer',
      paddingTop: 15,
      paddingLeft: 20,
      '&:hover': {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    tweetAvatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    tweetFooter: {
      display: 'flex',
      position: 'relative',
      left: -13,
      justifyContent: 'space-between',
      width: 450,
    },
    tweetUserName: {
      color: '#9e9e9e',
    },
  }));

  const { classes } = useHomeStyles(theme);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Some tweet limitation text"
                  user={{
                    fullname: 'Glafira Zhur',
                    username: 'GlafiraZhur',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                  }}
                  classes={classes}
                />,
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Search tweet" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

