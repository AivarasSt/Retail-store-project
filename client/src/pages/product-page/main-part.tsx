import React from 'react';
import {
  Box,
  BoxProps,
  Grid,
} from '@mui/material';
import Swiper from '../../components/swiper';
import Info from './main-part-info';
import BasicTabs from './main-part-tabs';
import Watch from '../../types/watch';

type ProductPageMainPartProps = BoxProps & {
  watch?: Watch
};

const ProductPageMainPart: React.FC<ProductPageMainPartProps> = ({ watch }) => (
  <Box sx={{ width: '100%', minHeight: '80vh' }}>
    <Grid container sx={{ minHeight: '60vh' }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '5vw 0',
        }}
      >
        <Swiper
          images={watch?.images}
        />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'start', lg: 'center' },
          alignItems: { xs: 'center', lg: 'start' },
          height: { xs: 'fit-content', lg: '100%' },
          flexDirection: 'column',
          width: '100%',
          paddingX: '3vw',
        }}
      >
        <Info watch={watch} />
        <BasicTabs watch={watch} />
      </Grid>
    </Grid>
  </Box>
);

export default ProductPageMainPart;
