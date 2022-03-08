import React from 'react';
import {
  Box,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import mensWatch from '../../assets/img/mensWatch.jpg';
import womensWatch from '../../assets/img/womensWatch.jpg';
import ShopHeader from '../../components/headers/shop-header';

const StyledImgBox = styled(Box)(({ theme }) => ({
  height: '60vw',
  width: '60vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ':hover': {
    opacity: 0.8,
  },
  [theme.breakpoints.up('sm')]: {
    height: '40vw',
    width: '40vw',
  },
  [theme.breakpoints.up('md')]: {
    height: '50vw',
    width: '99%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '40vw',
    width: '99%',
  },
  [theme.breakpoints.up('xl')]: {
    height: '60vh',
    width: '99%',
  },
}));

const StyledNavLink = styled(NavLink)(({
  textDecoration: 'none',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '8vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '7vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4vw',
  },
}));

const ShopPage: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    }}
  >
    <ShopHeader title="SHOP" />
    <Grid container sx={{ pt: { xs: '3vw', md: 0 } }}>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: { xs: 'start', md: 'center' },
          alignItems: { xs: 'start', md: 'center' },
          padding: { xs: '3vw', md: '3vw 0' },
          height: { sm: '60vw', md: 'auto' },
        }}
        xs={12}
        sm={6}
        item
      >
        <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${mensWatch})` }}>
          <StyledNavLink to="/shop/mens">
            <StyledTitle>
              Men&apos;s
            </StyledTitle>
          </StyledNavLink>
        </StyledImgBox>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: { xs: 'end', md: 'center' },
          alignItems: { xs: 'end', md: 'center' },
          padding: { xs: '3vw', md: '3vw 0' },
          height: { sm: '60vw', md: 'auto' },
        }}
        xs={12}
        sm={6}
        item
      >
        <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${womensWatch})` }}>
          <StyledNavLink to="/shop/womens">
            <StyledTitle>
              Women&apos;s
            </StyledTitle>
          </StyledNavLink>
        </StyledImgBox>
      </Grid>
    </Grid>
  </Box>
);

export default ShopPage;
