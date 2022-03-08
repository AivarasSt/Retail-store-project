import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  alpha,
  Box,
  Typography,
  styled,
  BoxProps,
} from '@mui/material';
import Logo from '../../logo';
import CustomDivider from '../../divider/divider';

type DesktopFooterProps = BoxProps & {
  breakpoint: string
};

const StyledFooterLink = styled(NavLink)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  paddingBottom: '2px',
  marginTop: '1.5vw',
  fontSize: '1vw',
  letterSpacing: 6,
  width: 'auto',
  ':hover': {
    boxShadow: `0px 1px ${color || theme.palette.secondary.main}`,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.8vw',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '0.6vw',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: `${theme.mixins.footer.height}px`,
  backgroundColor: `${theme.palette.primary.light}`,
  color: 'common.white',
}));

const StyledFooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingBottom: '4vw',
  backgroundColor: theme.palette.primary.light,
}));

const StyledFooterHeader = styled(Typography)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  paddingBottom: '2px',
  fontSize: '1.8vw',
  letterSpacing: 6,
  borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2vw',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '0.9vw',
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: '1.3vw',
  letterSpacing: 6,
  color: theme.palette.secondary.main,
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9vw',
  },
}));

const StyledFooterTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  backgroundColor: theme.palette.primary.light,
  justifyContent: 'center',
}));

const DesktopFooter: React.FC<DesktopFooterProps> = ({ breakpoint }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakpoint]: 'flex' },
  };

  return (
    <StyledBox
      sx={{
        ...desktopStyles,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
          }}
        >
          <Logo />
          <CustomDivider sx={{ width: '70%' }} />
        </Box>
      </Box>
      <StyledFooterContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <StyledFooterHeader>Customers</StyledFooterHeader>
          <StyledFooterLink to="/coming-soon">CONTACT US</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">FAQ</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">CUSTOMER SERVICE</StyledFooterLink>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            mx: '10vw',
          }}
        >
          <StyledFooterHeader>Information</StyledFooterHeader>
          <StyledFooterLink to="/coming-soon">PRIVACY POLICY</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">LEGAL</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">SITE MAP</StyledFooterLink>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <StyledFooterHeader>News</StyledFooterHeader>
          <StyledFooterLink to="/coming-soon">NEWSLETTER</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">CAREERS</StyledFooterLink>
          <StyledFooterLink to="/coming-soon">CATALOG</StyledFooterLink>
        </Box>
      </StyledFooterContainer>
      <StyledFooterTextContainer>
        <StyledFooterText>
          © 2022 Thin White Line - all rights reserved.
        </StyledFooterText>
      </StyledFooterTextContainer>
    </StyledBox>
  );
};

export default DesktopFooter;
