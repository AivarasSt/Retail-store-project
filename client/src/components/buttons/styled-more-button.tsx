import React from 'react';
import {
  Button,
  ButtonProps,
  styled,
} from '@mui/material';

type StyledMoreButtonProps = ButtonProps & {
  onClick: () => void,
  disabled: boolean,
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '50%',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '0',
  boxShadow: '0',
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
  },
  '&:disabled': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '20%',
  },
}));

const StyledMoreButton: React.FC<StyledMoreButtonProps> = ({ onClick, disabled }) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
  >
    MORE +
  </StyledButton>
);

export default StyledMoreButton;
