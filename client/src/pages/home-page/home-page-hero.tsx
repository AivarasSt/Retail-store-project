import React from 'react';
import {
  alpha,
  Box,
  styled,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.png';
import CustomDivider from '../../components/divider/divider';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    height: `calc(100vh - 85px - ${theme.mixins.toolbar.height}px)`,
  },
}));

const Hero: React.FC = () => (
  <StyledBox>
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '10vw',
            sm: '7.5vw',
            md: '5vw',
            lg: '3.5vw',
          },
          order: { xs: '2', lg: '1' },
          letterSpacing: 6,
          textAlign: { xs: 'center', lg: 'left' },
          py: { xs: 5, lg: 0 },
        }}
      >
        LUXURY
        <br />
        TIMEPIECE
        <br />
        RETAIL
      </Typography>
      <Box
        sx={{
          height: {
            xs: '60vw',
            sm: '40vw',
            md: '30vw',
            lg: '25vw',
            xl: '20vw',
          },
          display: 'flex',
          alignItems: 'center',
          order: { xs: '1', lg: '2' },
        }}
      >
        <img src={HeroImg} alt="hero" height="100%" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: {
            xs: '6vw',
            sm: '3vw',
            md: '3vw',
            lg: '1.8vw',
            xl: '1.6vw',
          },
          order: { xs: '3', lg: '3' },
          width: { xs: '80%', md: 'auto' },
        }}
      >
        <Link
          to="/shop/brands"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            fontSize: 'inherit',
            padding: '5px',
            letterSpacing: 4,
            textAlign: 'center',
          }}
        >
          Discover Watch Brands
        </Link>
        <CustomDivider
          sx={{
            width: '40%',
          }}
        />
      </Box>
    </Box>
  </StyledBox>
);

export default Hero;
