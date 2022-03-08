import React from 'react';
import { Box, styled } from '@mui/material';
import AboutSection from './home-page-about-section';
import Hero from './home-page-hero';
import ProductsSection from './home-page-products-section';

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: 2,
  [theme.breakpoints.up('sm')]: {
    marginTop: `${theme.mixins.toolbar.height}px`,
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: 0,
  },
}));

const HomePage: React.FC = () => (
  <StyledBox>
    <Hero />
    <ProductsSection />
    <AboutSection />
  </StyledBox>
);

export default HomePage;
