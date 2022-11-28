import React from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplayIcon from '@mui/icons-material/Replay';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';


import { Avatar, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';


interface TweetProps {
    _id: string,
    text: string;
    classes: any;
    createdAt: string;
    user: {
      fullname: string;
      username: string;
      avatarUrl: string;
    };
  }
  

export const Tweet: React.FC<TweetProps> = ({ _id, text, user, classes, createdAt }: TweetProps): React.ReactElement => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`}>    
      <Paper className={classes.tweet}  variant="outlined">
          <Avatar
            className={classes.tweetAvatar}
            alt={`User avatar ${user.fullname}`}
            src={user.avatarUrl}
          />        
          <div className={classes.tweetContent}>
          <Typography className={classes.tweetHeader}>
            <div>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}

              >
                <MenuItem onClick={handleClose}>
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Delete tweet
                </MenuItem>
              </Menu>
            </div>
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
        </div>
    </Paper>
  </a>
  );
}
