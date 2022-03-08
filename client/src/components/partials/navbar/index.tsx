import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Mobile from './mobile';
import Desktop from './desktop';
import LogoImg from '../../../assets/svg/thin-white-line-white.svg';
import LogoImgDark from '../../../assets/svg/thin-white-line-dark.svg';
import { debounce } from '../../../utilities/helpers/debounce';

const breakpoint = 'lg';

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', [breakpoint]: 'flex' },
          justifyContent: 'center',
          pt: 5,
          pb: 1,
        }}
      >
        <Link to="/">
          <img
            src={location.pathname.includes('/shop') ? LogoImgDark : LogoImg}
            alt="logo"
            height="45vw"
          />
        </Link>
      </Box>
      <AppBar position="sticky" style={{ top: visible ? '0' : '-85px', transition: 'top 0.4s' }} elevation={0}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Mobile
              breakpoint={breakpoint}
              location={location}
            />
            <Desktop
              breakpoint={breakpoint}
              location={location}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
