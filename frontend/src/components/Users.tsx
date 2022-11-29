import React from 'react'

import { Avatar, ListItemText, Button, Typography, Paper, List, Divider, ListItem, ListItemAvatar } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import { useSelector } from 'react-redux';
import { selectUsersItems } from '../store/ducks/users/selectors';

export const Users = () => {
  const items = useSelector(selectUsersItems);

  const theme = useTheme();

  const useUsersStyles = makeStyles<any>()((theme) => ({      
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
  }));

  const { classes } = useUsersStyles(theme);
  
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Interesting authors</b>
      </Paper>
      <List>
        {
          items.map(obj => (
            <ListItem className={classes.rightSideBlockItem}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/random/100x100?3"
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
          ))
        }
        <Divider component="li" />
      </List>
    </Paper>
  )
}
