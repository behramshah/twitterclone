import { Button, TextField, FormGroup, FormControl } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";

import { ModalBlock } from '../../../components/modalblock';
import { Notification } from '../../../components/Notification';

import { fetchSignIn, fetchSignUp } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';

interface RegisterModalProps {
  open: boolean;
  classes: ReturnType<any>;
  onClose: () => void;
}

export interface RegisterFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterFormSchema = yup.object().shape({
  fullname: yup.string().required('Enter name'),
  email: yup.string().email('incorrect mail').required('Enter mail'),
  username: yup.string().required('Enter username'),
  password: yup.string().min(6, 'Password length must be at least 6 characters').required(),
  password2: yup.string().oneOf([yup.ref('password')], 'Passwords doesnt match'),
});

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose, classes }): React.ReactElement => {
  const dispatch = useDispatch();
  const openNotificationRef = React.useRef<(text: string) => void>(() => { });
  const loadingStatus = useSelector(selectUserStatus);

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema)
  });

  const onSubmit = async (data: RegisterFormProps) => {
    dispatch(fetchSignUp(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Succesfully registered!');
      onClose();
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Error in registration process!');
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
            title="Войти в аккаунт">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         onChange={onChange}
                         value={value}
                         className={classes.registerField}
                          id="email"
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
                    name="username"
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         onChange={onChange}
                         value={value}
                         className={classes.registerField}
                          id="username"
                          label="Username"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="filled"
                          type="text"
                          defaultValue=""
                          helperText={errors.username?.message}
                          error={!!errors.username}
                          fullWidth
                       />
                   )}
                    
                  />
                  <Controller
                    control={control}
                    name="fullname"
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         onChange={onChange}
                         value={value}
                         className={classes.registerField}
                          id="fullname"
                          label="Full name"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="filled"
                          type="text"
                          defaultValue=""
                          helperText={errors.fullname?.message}
                          error={!!errors.fullname}
                          fullWidth
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
                         className={classes.registerField}
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
                  <Controller
                    control={control}
                    name="password2"
                    render={({ field: { onChange, value }}) => (
                      <TextField
                         onChange={onChange}
                         value={value}
                         className={classes.registerField}
                        id="password2"
                        label="Repeat password"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        defaultValue=""
                        helperText={errors.password2?.message}
                        error={!!errors.password2}
                        fullWidth
                       />
                   )}
                  />
                  <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                    Register
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
