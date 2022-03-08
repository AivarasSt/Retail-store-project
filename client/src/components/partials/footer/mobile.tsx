import React, { useState } from 'react';
import {
  Box,
  Typography,
  styled,
  BoxProps,
  AccordionSummaryProps,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Logo from '../../logo';
import CustomDivider from '../../divider/divider';

type MobileFooterProps = BoxProps & {
  breakpoint: string
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: `${theme.mixins.footer.height.desktop}px`,
  padding: '0 16px',
  backgroundColor: theme.palette.primary.light,
  color: 'common.white',
}));

const StyledFooterLink = styled(NavLink)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  textDecoration: 'none',
  paddingBottom: '2px',
  marginTop: '1.3vw',
  fontSize: '2.5vw',
  letterSpacing: 6,
  width: 'fit-content',
  ':hover': {
    boxShadow: `0px 1px ${color || theme.palette.secondary.main}`,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5vw',
  },
}));

const StyledFooterHeader = styled(Typography)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  fontSize: '3.5vw',
  letterSpacing: 6,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5vw',
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: '3vw',
  letterSpacing: 6,
  textAlign: 'center',
  marginTop: '3vw',
  color: theme.palette.secondary.main,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2vw',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <Typography sx={{ fontSize: { xs: '5vw', sm: '4vw' }, color: 'secondary.main' }}>+</Typography>
    }
    {...props}
  />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor:
  theme.palette.primary.light,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(135deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 5px',
}));

const MobileFooter: React.FC<MobileFooterProps> = ({ breakpoint }) => {
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const desktopStyles = {
    display: { xs: 'flex', [breakpoint]: 'none' },
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '60%',
        }}
      >
        <MuiAccordion sx={{ width: { xs: '100%', sm: '80%', md: '60%' } }} disableGutters elevation={0} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content">
            <StyledFooterHeader>Customers</StyledFooterHeader>
          </AccordionSummary>
          <AccordionDetails>
            <StyledFooterLink to="/coming-soon">CONTACT US</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">FAQ</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">CUSTOMER SERVICE</StyledFooterLink>
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion sx={{ width: { xs: '100%', sm: '80%', md: '60%' } }} disableGutters elevation={0} square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content">
            <StyledFooterHeader>Information</StyledFooterHeader>
          </AccordionSummary>
          <AccordionDetails>
            <StyledFooterLink to="/coming-soon">PRIVACY POLICY</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">LEGAL</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">SITE MAP</StyledFooterLink>
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion sx={{ width: { xs: '100%', sm: '80%', md: '60%' } }} disableGutters elevation={0} square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content">
            <StyledFooterHeader>News</StyledFooterHeader>
          </AccordionSummary>
          <AccordionDetails>
            <StyledFooterLink to="/coming-soon">NEWSLETTER</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">CAREERS</StyledFooterLink>
            <StyledFooterLink to="/coming-soon">CATALOG</StyledFooterLink>
          </AccordionDetails>
        </MuiAccordion>
      </Box>
      <Box>
        <StyledFooterText>
          © 2022 Thin White Line - all rights reserved.
        </StyledFooterText>
      </Box>
    </StyledBox>
  );
};

export default MobileFooter;
