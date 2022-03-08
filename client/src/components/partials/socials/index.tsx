import React from 'react';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { alpha, styled, Link } from '@mui/material';

const StyledBoxLeft = styled(Box)(({ theme }) => ({
  display: 'none',
  flexDirection: 'column',
  width: 'max-content',
  padding: '15px 7px 50px 0px',
  borderRight: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
  position: 'sticky',
  bottom: 0,
  left: '2vw',
  fontSize: '20px',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledBoxRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'max-content',
  padding: '7px 50px 7px 15px',
  borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
  position: 'sticky',
  bottom: '2vw',
  left: '100vw',
  fontSize: '20px',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Socials: React.FC = () => (
  <>
    <StyledBoxLeft>
      <Link href="https://www.facebook.com/">
        <FacebookIcon fontSize="inherit" />
      </Link>
      <Link href="https://www.instagram.com/">
        <InstagramIcon fontSize="inherit" />
      </Link>
      <Link href="https://twitter.com/">
        <TwitterIcon fontSize="inherit" />
      </Link>
    </StyledBoxLeft>
    <StyledBoxRight>
      <Link href="https://www.facebook.com/">
        <FacebookIcon fontSize="inherit" />
      </Link>
      <Link href="https://www.instagram.com/">
        <InstagramIcon fontSize="inherit" />
      </Link>
      <Link href="https://twitter.com/">
        <TwitterIcon fontSize="inherit" />
      </Link>
    </StyledBoxRight>
  </>
);

export default Socials;
