import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import AddProductForm from './add-product-form';

const AdminProducts: React.FC = () => {
  const location = useLocation();

  return (
    <Grid
      item
      xs
      sx={{ m: 2 }}
    >
      <Typography fontSize="24px">
        {location.pathname.includes('/editproduct')
          ? 'Edit Product'
          : 'Add Product'}
      </Typography>
      <AddProductForm />
    </Grid>
  );
};

export default AdminProducts;
