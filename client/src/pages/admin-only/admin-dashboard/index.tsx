import React from 'react';
import { Grid, Typography } from '@mui/material';

import Orders from './dashboard-orders';

const AdminDashboard = () => (
  <Grid item xs sx={{ m: 2 }}>
    <Typography fontSize="24px">Admin Dashboard</Typography>
    <Orders />
  </Grid>
);

export default AdminDashboard;
