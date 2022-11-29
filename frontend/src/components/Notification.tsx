import React from 'react'
import { Snackbar, Alert } from '@mui/material';

interface NotificationProps {
  children: (callback: (text: string) => void) => React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({ children }): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [notificationObj, setNotificationObj] = React.useState<{ text: string }>();

  const openNotification = (text: string) => {
    setNotificationObj({
      text,
    });
    setOpen(true);
  }

  return (
    <>
      {children(openNotification)}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity='success'>
          {notificationObj?.text}
        </Alert>
      </Snackbar>
    </>
  )
}
