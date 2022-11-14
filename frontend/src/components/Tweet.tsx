import React from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplayIcon from '@mui/icons-material/Replay';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';

import { Avatar, Grid, IconButton, Paper, Typography } from '@mui/material';


interface TweetProps {
    text: string;
    classes: any;
    user: {
      fullname: string;
      username: string;
      avatarUrl: string;
    };
  }
  

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
  return (
    <Paper className={classes.tweet}  variant="outlined">
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
      </Grid>
      <Grid item xs={11}>
        <Typography>
          <b>{user.fullname}</b>&nbsp;
          <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
          <span className={classes.tweetUserName}>·</span>&nbsp;
          <span className={classes.tweetUserName}>1 h</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <InsertCommentIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <ReplayIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ThumbUpAltIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ShareIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </Grid>
    </Grid>
  </Paper>
  );
}
