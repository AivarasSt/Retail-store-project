import React from 'react';
import {
  Button, ButtonProps,
} from '@mui/material';

export type FormButtonProps = Omit<ButtonProps, 'type' | 'fullWidth' | 'variant' | 'color'>;

const FormButton: React.FC<FormButtonProps> = ({ children, sx, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="outlined"
    color="secondary"
    sx={{ height: 56, mb: 1 }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
