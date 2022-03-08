import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import BrandCard from '../../components/cards/brand-card';
import ShopHeader from '../../components/headers/shop-header';
import Brand from '../../types/brand';
import BrandService from '../../services/brand-service';

const BrandPage: React.FC = () => {
  const [fetchedBrands, setFetchedBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const brands = await BrandService.getBrands();
      if (brands) {
        setFetchedBrands(brands);
      }
    })();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <ShopHeader title="Brands" />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'space-around',
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexGrow: 0.5,
        }}
      >
        {fetchedBrands.map(({ id, ...props }) => <BrandCard key={id} {...props} />)}
      </Box>
    </Box>
  );
};

export default BrandPage;
