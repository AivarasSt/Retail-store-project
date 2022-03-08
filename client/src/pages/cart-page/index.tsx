import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Watch from 'types/watch';
import ShopHeader from '../../components/headers/shop-header';
import Checkout from './checkout-form';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Watch[]>([]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 5,
      }}
    >
      <ShopHeader title="YOUR SHOPPING CART" sx={{ width: { xs: '80vw', md: '60vw' } }} />
      <Grid container maxWidth="xl" sx={{ mt: '3vw', flexGrow: 1 }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {
            cartItems.length > 0
              ? cartItems.map((cartItem) => <div>a</div>)
              : <Typography sx={{ fontSize: { xs: '5vw', md: '3vw', lg: '2vw' } }}>Your cart is empty.</Typography>
          }

        </Grid>
        <Grid item xs={12} md={6} sx={{ minHeight: '30vw' }}>
          <Checkout />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
