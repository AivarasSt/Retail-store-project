import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import StyledNavLink, { StyledScrollLink } from './styled-nav-link';
import CustomDivider from '../../divider/divider';
import LocationParams from '../../../types/location';

type DesktopProps = BoxProps & {
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
  { title: 'About', path: '/' },
  { title: 'What\'s New', path: '/coming-soon' },
  { title: 'Contact Us', path: '/coming-soon' },
];

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  marginTop: 4,
  height: theme.mixins.toolbar.height,
}));

const Desktop: React.FC<DesktopProps> = ({ breakpoint, location }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakpoint]: 'flex' },
  };

  const storePageChild = location.pathname.includes('/shop');

  return (
    <StyledBox sx={{
      ...desktopStyles,
    }}
    >
      <CustomDivider sx={{ width: storePageChild ? '10%' : '100%', alignSelf: 'center' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '60%',
          }}
        >
          {storePageChild
            ? (
              shopPageLinks.map(({ title, path }) => (
                <StyledNavLink key={title} to={path}>
                  {title}
                </StyledNavLink>
              )))
            : (
              homePageLinks.map(({ title, path }) => (
                title === 'About' && location.pathname === '/'
                  ? (
                    <StyledScrollLink to="about" smooth="true" key={title} duration={800}>
                      {title}
                    </StyledScrollLink>
                  )
                  : (
                    <StyledNavLink key={title} to={path}>
                      {title}
                    </StyledNavLink>
                  )
              )))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: { md: '30%', lg: '25%' },
          }}
        >
          {storePageChild
            ? (
              <StyledNavLink to="/shop/cart">
                Cart
              </StyledNavLink>
            )
            : (
              <StyledNavLink to="/coming-soon">
                Warranty
              </StyledNavLink>
            )}
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Desktop;
