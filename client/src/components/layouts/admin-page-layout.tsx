import React from 'react';
import {
  Box, Grid, styled,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminNavigation from 'pages/admin-only/admin-navigation';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '90vw',
  [theme.breakpoints.up('sm')]: {
    minHeight: '100vh',
    width: '100vw',
  },
}));

const AdminPageLayout: React.FC = () => (
  <StyledBox component="main">
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container>
        <AdminNavigation />
        <Outlet />
      </Grid>
    </Box>
  </StyledBox>
);

export default AdminPageLayout;
