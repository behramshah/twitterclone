import { Button, TextField, FormGroup, FormControl } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";
import { ModalBlock } from '../../../components/modalblock';
import { Notification } from '../../../components/Notification';

import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';

interface LoginModalProps {
  open: boolean;
  classes: ReturnType<any>;
  onClose: () => void;
}

export interface LoginFormProps {
  email: string;
  password: string;
  errors: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Incorrect mail').required('Enter mail'),
  password: yup.string().min(6, 'Password length must be at least 6 characters ').required(),
});

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, classes }): React.ReactElement => {
  const dispatch = useDispatch();
  const openNotificationRef = React.useRef<(text: string) => void>(() => { });
  const loadingStatus = useSelector(selectUserStatus);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema)
  });

  const onSubmit = async (data: LoginFormProps) => {
    dispatch(fetchSignIn(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Successfull authorization!');
      onClose();
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Incorrect mail or password');
    }
  }, [loadingStatus]);

  return <Notification>
    {
      callback => {
        openNotificationRef.current = callback;
        return (
          <ModalBlock
            visible={open}
            onClose={onClose}
            classes={classes}
            title="Sign in">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <Controller
                    control={control}
                    name="email"               
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         id="email"
                         className={classes.loginSideField}
                         onChange={onChange}
                         value={value}
                         label="E-Mail"
                         InputLabelProps={{
                          shrink: true,
                         }}
                         variant="filled"
                         type="email"
                         defaultValue=""
                         helperText={errors.email?.message}
                         error={!!errors.email}
                         fullWidth
                         autoFocus
                       />
                   )}
                  />
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         onChange={onChange}
                         value={value}
                         className={classes.loginSideField}
                          id="password"
                          label="Password"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="filled"
                          type="password"
                          defaultValue=""
                          helperText={errors.password?.message}
                          error={!!errors.password}
                          fullWidth
                       />
                   )}
                  />
                  <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                    Log in
                  </Button>
                </FormGroup>
              </FormControl>
            </form>
          </ModalBlock>
        )
      }
    }
  </Notification>
}
