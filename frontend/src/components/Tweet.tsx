import React from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplayIcon from '@mui/icons-material/Replay';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';

import { Avatar, IconButton, Paper, Typography } from '@mui/material';


interface TweetProps {
    text: string;
    classes: any
    user: {
      fullname: string;
      username: string;
      avatarUrl: string;
    };
  }
  

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
  return (
    <Paper className={classes.tweet}  variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`User avatar ${user.fullname}`}
          src={user.avatarUrl}
        />
      
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
  </Paper>
  );
}
