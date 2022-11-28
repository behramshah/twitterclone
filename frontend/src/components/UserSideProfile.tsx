import React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Typography, Popover } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

export const UserSideProfile: React.FC = (): React.ReactElement => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>();
  const theme = useTheme();

  const useSideProfileStyles = makeStyles<any>()((theme) => ({      
    sideProfile: {
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      bottom: 30,
      padding: '10px 15px',
      width: 260,
      borderRadius: 50,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#E1F5FE',
      },
    },
    sideProfileInfo: {
      flex: 1,
      marginLeft: 10,
      '& b': {
        fontSize: 16,
      },
    },             
  }));

  const { classes } = useSideProfileStyles(theme);

  const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    anchorRef.current = event.currentTarget;
    setVisiblePopup(true);
  };

  const handleClosePopup = (): void => {
    setVisiblePopup(false);
  };

  return (
    <>
      <div onClick={handleOpenPopup} className={classes.sideProfile}>
        <Avatar src="https://source.unsplash.com/random/100x100?3" />

        <div className={classes.sideProfileInfo}>
          <b>Bahram Jabbarov</b>
          <Typography style={{ color: '#9E9E9E' }}>@BahramEdu</Typography>
        </div>
        <KeyboardArrowDownIcon />
      </div>
      <Popover
        open={visiblePopup}
        onClose={handleClosePopup}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        The content of the Popover.
      </Popover>
    </>
  );
};
