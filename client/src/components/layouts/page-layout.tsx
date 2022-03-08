import React from 'react';
import {
  Box, styled,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Socials from '../partials/socials';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.mixins.toolbar.height}px - 85px)`,
}));

const PageLayout: React.FC = () => (
  <Box>
    <Navbar />
    <StyledBox component="main">
      <Outlet />
    </StyledBox>
    <Socials />
    <Footer />
  </Box>
);

export default PageLayout;
