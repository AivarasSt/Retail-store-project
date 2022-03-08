import {
  Box,
  BoxProps,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import CustomDivider from '../divider/divider';

type ShopHeaderProps = BoxProps & {
  title: string
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4.5vw',
  color: theme.palette.secondary.main,
  letterSpacing: 6,
  marginTop: '5vw',
  paddingBottom: '5px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3vw',
    marginTop: '2vw',
  },
}));

const ShopHeader: React.FC<ShopHeaderProps> = ({ title, sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...sx,
    }}
  >
    <StyledTypography>
      {title}
    </StyledTypography>
    <CustomDivider sx={{ width: { xs: '10vw', md: '8vw', lg: '4vw' } }} />
  </Box>
);

export default ShopHeader;
