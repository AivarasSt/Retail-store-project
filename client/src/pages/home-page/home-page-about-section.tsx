import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import AboutImg from '../../assets/img/AboutImg.jpg';
import CustomDivider from '../../components/divider/divider';

const StyledHeader = styled(Typography)(({ theme }) => ({
  position: 'relative',
  top: '-9vw',
  right: '-21vw',
  fontSize: '8vw',
  lineHeight: 1,
  letterSpacing: 6,
  marginTop: '5vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '6vw',
    top: '-9vw',
    right: '-25vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5vw',
    top: '10vw',
    right: '30vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3vw',
    top: '6.5vw',
    right: '38vw',
  },
}));

const StyledBackgroundHeader = styled(Typography)(({ theme }) => ({
  fontSize: '15vw',
  opacity: 0.1,
  lineHeight: 0.8,
  letterSpacing: 6,
  [theme.breakpoints.up('sm')]: {
    fontSize: '10vw',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '15%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6vw',
    marginLeft: '10%',
  },
}));

const StyledImgBox = styled(Box)(({ theme }) => ({
  height: '80vw',
  width: '80vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10vw',
  [theme.breakpoints.up('sm')]: {
    height: '70vw',
    width: '70vw',
    position: 'static',
  },
  [theme.breakpoints.up('md')]: {
    height: '45vw',
    width: '45vw',
    margin: '2vw',
    marginTop: '7vw',
  },
  [theme.breakpoints.up('lg')]: {
    height: '35vw',
    width: '35vw',
    marginTop: '2vw',
  },
}));

const HomePageAboutSection: React.FC = () => (
  <Box
    id="about"
    sx={{
      width: '100%',
      display: { xs: 'block', md: 'flex' },
      flexDirection: 'column',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: { md: 'space-around' },
        alignItems: 'center',
        order: { xs: '1', md: '2' },
        position: 'relative',
      }}
    >
      <Typography sx={{ width: '40%', textAlign: 'center', display: { xs: 'none', md: 'inline-block' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, nibh in porta hendrerit, metus metus suscipit enim, sed dignissim magna tortor ut lacus. In erat est, suscipit eget enim vitae, pulvinar ornare augue. In eu massa at ante suscipit consequat quis in dui. Nam porta accumsan mattis. Curabitur ipsum ipsum, elementum ut libero auctor, vestibulum pellentesque arcu. Sed ullamcorper erat est. Cras fermentum lacus eget lorem eleifend, quis porta quam egestas.</Typography>
      <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${AboutImg})` }} />
    </Box>
    <Box sx={{ width: '100%', height: '14vw', order: { xs: '2', md: '1' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: { xs: 'absolute', md: 'relative' } }}>
        <StyledHeader sx={{ ml: 5 }}>About Us</StyledHeader>
      </Box>
      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          lineHeight: 0.8,
          justifyContent: { md: 'start' },
          pl: { lg: '' },
        }}
      >
        <CustomDivider
          sx={{
            width: '40%',
            alignSelf: 'center',
            mr: 4,
            display: { md: 'none' },
          }}
        />
        <StyledBackgroundHeader>About Us</StyledBackgroundHeader>
      </Box>
    </Box>
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        my: { xs: '10vw', sm: '5vw' },
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Typography sx={{ textAlign: 'center', width: '80%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, nibh in porta hendrerit, metus metus suscipit enim, sed dignissim magna tortor ut lacus. In erat est, suscipit eget enim vitae, pulvinar ornare augue. In eu massa at ante suscipit consequat quis in dui. Nam porta accumsan mattis. Curabitur ipsum ipsum, elementum ut libero auctor, vestibulum pellentesque arcu. Sed ullamcorper erat est. Cras fermentum lacus eget lorem eleifend, quis porta quam egestas.</Typography>
    </Box>
  </Box>
);

export default HomePageAboutSection;
