import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ProductService from 'services/product-service';
import Watch from 'types/watch';
import { useParams } from 'react-router-dom';
import ProductPageCollectionPart from './collection-part';
import MainPart from './main-part';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetchedProduct, setFetchedProduct] = useState<Watch | undefined>();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const product = await ProductService.getProduct(id);
      if (product) {
        console.log(product);
        setFetchedProduct(product);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box sx={{ width: '100%', margin: { lg: 'auto' } }}>
      {loading
        ? null
        : (
          <>
            <MainPart watch={fetchedProduct} />
            <ProductPageCollectionPart watch={fetchedProduct} />
          </>
        )}
    </Box>
  );
};

export default ProductPage;
