import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
} from '@mui/material';
import Products from './dashboard-products';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.light,
  borderRadius: '0',
  boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  color: theme.palette.secondary.main,
}));

const AdminProducts: React.FC = () => (
  // eslint-disable-next-line react/jsx-boolean-value
  <Grid item xs={true} sx={{ m: 2 }}>
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Typography fontSize="24px">Admin Products</Typography>
      <StyledButton>
        <StyledNavLink to="/admin/addproduct">ADD PRODUCT</StyledNavLink>
      </StyledButton>
    </Box>
    <Products />
  </Grid>
);

export default AdminProducts;
