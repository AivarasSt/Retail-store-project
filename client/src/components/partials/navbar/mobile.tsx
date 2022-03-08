import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Drawer,
  IconButton,
  styled,
  Theme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledNavLink, { StyledScrollLink } from './styled-nav-link';
import CustomDivider from '../../divider/divider';
import LocationParams from '../../../types/location';
import Logo from '../../logo';

type MobileProps = BoxProps & {
  breakpoint: string,
  location: LocationParams,
};

const shopPageLinks = [
  { title: 'Home', path: '/' },
  { title: 'Brands', path: '/shop/brands' },
  { title: 'Men\'s Watches', path: '/shop/mens' },
  { title: 'Women\'s Watches', path: '/shop/womens' },
];

const homePageLinks = [
  { title: 'Shop', path: '/shop' },
  { title: 'About', path: '/about' },
  { title: 'What\'s New', path: '/coming-soon' },
  { title: 'Contact Us', path: '/coming-soon' },
];

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: `${theme.mixins.toolbar.height}px`,
  width: '100%',
}));

const StyledNavIcon = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  p: 0,
  display: 'flex',
  alignItems: 'center',
}));

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Mobile: React.FC<MobileProps> = ({ breakpoint, location }) => {
  const [open, setOpen] = useState(false);
  const mobileStyles = {
    display: { xs: 'flex', [breakpoint]: 'none' },
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexDirection: 'column', width: '100%', ...mobileStyles }}>
      <StyledBox>
        <Logo />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StyledNavIcon to="/shop/cart" sx={{ display: location.pathname.includes('/shop') ? 'inline-block' : 'none' }}>
            <ShoppingCartIcon sx={{ fontSize: '20px' }} />
          </StyledNavIcon>
          <IconButton
            onClick={handleClick}
            sx={{ p: 0, fontSize: '25px', height: '100%' }}
          >
            <StyledMenuIcon />
          </IconButton>
        </Box>
        <Drawer
          id="menu-appbar"
          anchor="right"
          open={open}
          onClose={handleClick}
        >
          <Box sx={{
            width: { xs: '100vw', sm: '50vw', md: '45vw' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            m: 3,
          }}
          >
            <Button
              sx={{ p: '0', justifyContent: 'center' }}
              onClick={handleClick}
            >
              <CloseRoundedIcon sx={{ color: 'common.black' }} />
            </Button>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              py: 2,
            }}
            >
              {location.pathname.includes('/shop')
                ? (
                  shopPageLinks.map(({ title, path }) => (
                    <StyledNavLink
                      to={path}
                      key={title}
                      onClick={handleClick}
                      sx={{ fontSize: '3vh' }}
                    >
                      {title}
                    </StyledNavLink>
                  )))
                : (
                  homePageLinks.map(({ title, path }) => (
                    title === 'About'
                      ? (
                        <StyledScrollLink
                          to="about"
                          smooth="true"
                          key={title}
                          onClick={handleClick}
                          duration={800}
                          sx={(theme: Theme) => ({ fontSize: '3vh', color: theme.palette.primary.main })}
                        >
                          {title}
                        </StyledScrollLink>
                      )
                      : (
                        <StyledNavLink
                          to={path}
                          key={title}
                          onClick={handleClick}
                          sx={(theme: Theme) => ({ fontSize: '3vh', color: theme.palette.primary.main })}
                        >
                          {title}
                        </StyledNavLink>
                      )
                  )))}
            </Box>
          </Box>
        </Drawer>
      </StyledBox>
      <CustomDivider sx={{ width: '100%' }} />
    </Box>
  );
};

export default Mobile;
