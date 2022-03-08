import React, { useEffect, useState } from 'react';
import {
  Box,
  BoxProps,
  Grid,
  styled,
} from '@mui/material';
import CollectionService from 'services/collection-service';
import Info from './collection-part-info';
import Watch from '../../types/watch';
import Collection from '../../types/collection';

type ProductPageCollectionPartProps = BoxProps & {
  watch?: Watch
};

const StyledImgBox = styled(Box)(({ theme }) => ({
  height: '70vw',
  width: '70vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '60vw',
    width: '60vw',
    position: 'static',
  },
  [theme.breakpoints.up('md')]: {
    height: '40vw',
    width: '40vw',
  },
  [theme.breakpoints.up('lg')]: {
    height: '30vw',
    width: '30vw',
  },
}));

const ProductPageCollectionPart: React.FC<ProductPageCollectionPartProps> = ({ watch }) => {
  // eslint-disable-next-line no-underscore-dangle
  const id = watch?.collectionName.id;
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedCollection, setFetchedCollection] = useState<Collection | undefined>();

  useEffect(() => {
    (async () => {
      const collection = await CollectionService.getCollection(id);
      if (collection) {
        setFetchedCollection(collection);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '80vh' }}>
      {loading ? null
        : (
          <Grid container sx={{ height: { xs: '100vh', sm: '120vh', lg: '60vh' } }}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: { xs: '5vw', lg: 0 },
              }}
            >
              <StyledImgBox sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${fetchedCollection?.images[0]})` }} />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: '35vh', sm: '45vh', lg: '100%' },
                width: '100%',
                paddingX: '3vw',
                marginTop: { xs: '5vw', lg: 0 },
              }}
            >
              <Info collectionName={fetchedCollection} />
            </Grid>
          </Grid>
        )}
    </Box>
  );
};

export default ProductPageCollectionPart;
