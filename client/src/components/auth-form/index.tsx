import React, { FormEventHandler } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from './auth-form-button';

export type AuthFormProps = {
  title: string,
  loading: boolean,
  isValid: boolean,
  onSubmit: FormEventHandler<HTMLFormElement>,
};

const AuthForm: React.FC<AuthFormProps> = ({
  children,
  title,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '7vh' }}
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {
          loading
            ? <CircularProgress color="inherit" />
            : title
        }
      </Button>
    </Box>
  </Container>
);

export default AuthForm;
