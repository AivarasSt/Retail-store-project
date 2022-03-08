import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import watchImg from '../../assets/img/watches.jpg';
import accessoriesImg from '../../assets/img/accessories.jpeg';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '5vw',
  width: '80%',
  letterSpacing: 4,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5vw',
  },
}));

const StyledTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: '50vw',
  height: '60vw',
  zIndex: '1',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '40vw',
    width: '40vw',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    height: '60%',
    width: '35%',
  },
}));

const StyledImgBox = styled(Box)(({ theme }) => ({
  height: '60vw',
  width: '60vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '40vw',
    width: '40vw',
    position: 'static',
  },
  [theme.breakpoints.up('md')]: {
    height: '20vw',
    width: '20vw',
  },
  [theme.breakpoints.up('xl')]: {
    height: '15vw',
    width: '15vw',
  },
}));

const StyledNavLink = styled(NavLink)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  paddingTop: '1vw',
  width: '70%',
  borderColor: `${theme.palette.secondary.main}`,
  alignSelf: 'center',
  [theme.breakpoints.up('xl')]: {
    paddingTop: '0.5vw',
  },
}));

const ProductsSection: React.FC = () => (
  <Box
    sx={{
      height: { xs: '100vh', md: '50vh' },
      mt: { xs: 20, lg: 0 },
    }}
  >
    <Grid container sx={{ height: '100%' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          height: { sm: 'max-content', md: '100%' },
          justifyContent: { xs: 'start', md: 'space-around', xl: 'center' },
          gap: 5,
          overflow: 'hidden',
        }}
      >
        <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${watchImg})` }}>
          <StyledNavLink to="/shop">
            <Typography sx={{ display: { xs: 'none', md: 'block' }, fontSize: { md: '3vw', xl: '2vw' } }}>
              Watches
            </Typography>
          </StyledNavLink>
        </StyledImgBox>
        <StyledTextBox sx={{ right: { xs: '-45%', sm: 0 } }}>
          <StyledNavLink to="/shop" style={{ width: '100%', alignSelf: 'center' }}>
            <StyledTypography sx={{ textAlign: 'left' }}>Discover</StyledTypography>
            <StyledTypography sx={{ textAlign: 'right' }}>Watches</StyledTypography>
          </StyledNavLink>
          <StyledDivider />
        </StyledTextBox>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          height: { xs: 'max-content', md: '100%' },
          justifyContent: { xs: 'end', md: 'space-around', xl: 'center' },
          alignItems: 'end',
          gap: 5,
        }}
      >
        <StyledTextBox sx={{ right: { xs: '45%', sm: 0 } }}>
          <StyledNavLink to="/coming-soon" style={{ width: '100%', alignSelf: 'center' }}>
            <StyledTypography sx={{ textAlign: 'left' }}>Discover</StyledTypography>
            <StyledTypography sx={{ textAlign: 'right' }}>Accessories</StyledTypography>
          </StyledNavLink>
          <StyledDivider />
        </StyledTextBox>
        <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${accessoriesImg})` }}>
          <Typography sx={{ display: { xs: 'none', md: 'block' }, fontSize: { md: '3vw', xl: '2vw' } }}>Accessories</Typography>
        </StyledImgBox>
      </Grid>
    </Grid>
  </Box>
);

export default ProductsSection;
