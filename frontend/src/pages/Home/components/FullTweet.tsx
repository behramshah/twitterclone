import React from 'react';
import { CircularProgress, Avatar, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

export const FullTweet: React.FC = (): React.ReactElement | null => {  
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;
  const theme = useTheme();

  const useTweetStyles = makeStyles<any>()((theme) => ({  
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
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
  }));

  const { classes } = useTweetStyles(theme);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classes.tweetsHeaderUser}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`User avatar ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>1 h</span>
            </div>
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweetData.text}
        </Typography>
      </Paper>
    );
  }

  return null;
};
