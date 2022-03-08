import React from 'react';
import {
  alpha,
  Divider,
  DividerProps,
  styled,
} from '@mui/material';

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: `${alpha(theme.palette.secondary.main, 0.5)}`,
}));

const CustomDivider: React.FC<DividerProps> = ({ sx }) => (
  <StyledDivider sx={{ ...sx }} />
);

export default CustomDivider;
