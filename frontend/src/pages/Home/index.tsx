import React from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemAvatar, Button, ListItemText, Divider, Avatar, CircularProgress } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { AddTweetForm } from '../../components/AddTweetForm';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { SearchTextField } from '../../components/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';

import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { fetchTags } from '../../store/ducks/tags/actionCreators';


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
      position: 'sticky',
      top: 0,
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
      borderRadius: 45,
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
    tweetsHeaderUser: {
      display: 'flex',
      alignItems: 'center',
    },
    fullTweet: {
      padding: 22,
    },
    fullTweetText: {
      fontSize: 24,
      marginTop: 20,
      lineHeight: 1.3125,
      wordBreak: 'break-word',
    }, 
    tweetsHeaderBackButton: {
      marginRight: 20,
    },  
    tweet: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      cursor: 'pointer',
      paddingTop: 15,
      paddingLeft: 20,
      borderTop: '0',
      borderLeft: '0',
      borderRight: '0',
      borderRadius: 0,
      padding: '10px 15px',
      '& h6': {
        fontWeight: 800,
      },
      '&:hover': {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    tweetWrapper: {
      color: 'inherit',
      textDecoration: 'none',
    },  
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
        '&:hover': {
          backgroundColor: '#edf3f6',
        },
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
    
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
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
          paddingTop: 0,
        },
    },
        rightSideBlockHeader: {
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            backgroundColor: 'transparent',
            padding: '13px 18px',
            '& b': {
              fontSize: 20,
              fontWeight: 800,
            },
          },
          rightSideBlockItem: {
            cursor: 'pointer',
            '& .MuiTypography-body1': {
              fontWeight: 700,
            },
            '& .MuiListItemAvatar-root': {
              minWidth: 50,
            },
            '& .MuiListItemText-root': {
              margin: 0,
            },
            '&:hover': {
              backgroundColor: '#edf3f6',
            },
            '& a': {
              color: 'inherit',
              textDecoration: 'none',
            },
          },
          addForm: {
            padding: 20,
          },
          addFormBody: {
            display: 'flex',
            width: '100%',
          },
          addFormBottom: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          addFormBottomActions: {
            marginTop: 10,
            paddingLeft: 70,
          },
          addFormTextarea: {
            width: '100%',
            border: 0,
            fontSize: 20,
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'none',
          },
          addFormBottomLine: {
            height: 12,
            backgroundColor: '#E6ECF0',
          },
          addFormCircleProgress: {
            position: 'relative',
            width: 20,
            height: 20,
            margin: '0 10px',
            '& .MuiCircularProgress-root': {
              position: 'absolute',
            },
          },
          addFormBottomRight: {
            display: 'flex',
            alignItems: 'center',
          },
                 
  }));

  const { classes } = useHomeStyles(theme);
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">

              <Route path="/home/:any">
                <BackButton />
              </Route>

              <Route path={['/home', '/home/search']} exact>
                <Typography variant="h6">Home</Typography>
              </Route>

              <Route path="/home/tweet">
                <Typography variant="h6">Тweet</Typography>
              </Route>
          
            </Paper>        

            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>

            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentred}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
              )}
            </Route>
            
            <Route path="/home/tweet/:id" component={FullTweet} exact />   

          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Search in Twitter"
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Recomended</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random/100x100?2"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

