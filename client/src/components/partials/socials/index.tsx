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

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Socials: React.FC = () => (
  <>
    <StyledBoxLeft>
      <StyledLink href="https://www.facebook.com/" target="_blank">
        <FacebookIcon fontSize="inherit" />
      </StyledLink>
      <StyledLink href="https://www.instagram.com/" target="_blank">
        <InstagramIcon fontSize="inherit" />
      </StyledLink>
      <StyledLink href="https://twitter.com/" target="_blank">
        <TwitterIcon fontSize="inherit" />
      </StyledLink>
    </StyledBoxLeft>
    <StyledBoxRight>
      <StyledLink href="https://www.facebook.com/" target="_blank">
        <FacebookIcon fontSize="inherit" />
      </StyledLink>
      <StyledLink href="https://www.instagram.com/" target="_blank">
        <InstagramIcon fontSize="inherit" />
      </StyledLink>
      <StyledLink href="https://twitter.com/" target="_blank">
        <TwitterIcon fontSize="inherit" />
      </StyledLink>
    </StyledBoxRight>
  </>
);

export default Socials;
