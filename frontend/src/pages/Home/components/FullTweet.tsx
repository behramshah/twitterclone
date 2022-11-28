import React from 'react';
import { CircularProgress, Avatar, Paper, Typography, Divider, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { Tweet } from '../../../components/Tweet';

import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import ReplayIcon from '@mui/icons-material/Replay';

import format from 'date-fns/format';
import az from 'date-fns/locale/az';

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
        paddingBottom: 0,
      },
      fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
      },    
      fullTweetFooter: {
        margin: '0 auto',
        borderTop: '1px solid #E6ECF0',
        left: 0,
        maxWidth: '100%',
        justifyContent: 'space-around',
        padding: '2px 0',
        marginTop: 20,
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
      <>
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
              </div>
            </Typography>
          </div>
          <Typography className={classes.fullTweetText} gutterBottom>
            {tweetData.text}
          </Typography>
          <Typography>
            <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'H:mm', { locale: az })} · </span>
            <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy.', { locale: az })}</span>
          </Typography>
          <div className={classes.fullTweetFooter}>
            <IconButton>
              <CommentIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ReplayIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ThumbUpAltIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ShareIcon style={{ fontSize: 25 }} />
            </IconButton>
          </div>
        </Paper>
        <Divider />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://source.unsplash.com/random/100x100?3',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://source.unsplash.com/random/100x100?3',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://source.unsplash.com/random/100x100?3',
          }}
          classes={classes}
        />
      </>
    );
  }

  return null;
};
