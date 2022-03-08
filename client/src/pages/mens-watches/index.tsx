import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Watch from 'types/watch';
import ProductService from 'services/product-service';
import WatchCard from '../../components/cards/watch-card';
import getWindowWidth from '../../helpers/window-helpers';
import ShopHeader from '../../components/headers/shop-header';
import StyledMoreButton from '../../components/buttons/styled-more-button';

const MensWatchesPage: React.FC = () => {
  const theme = useTheme();
  const winWidth = getWindowWidth();
  const [fetchedProducts, setFetchedProducts] = useState<Watch[]>([]);

  useEffect(() => {
    (async () => {
      const product = await ProductService.getMenProducts();
      if (product) {
        setFetchedProducts(product);
      }
    })();
  }, []);

  let initialWatchesCount = 0;

  if (winWidth < theme.breakpoints.values.md) {
    initialWatchesCount = 4;
  } else if (winWidth < theme.breakpoints.values.lg && winWidth > theme.breakpoints.values.md) {
    initialWatchesCount = 6;
  } else {
    initialWatchesCount = 8;
  }

  const [watchesToLoad, setWatchesToLoad] = useState<number>(initialWatchesCount);
  const [moreToLoad, setMoreToLoad] = useState<boolean>(true);

  const handleClick = () => {
    setWatchesToLoad(watchesToLoad + initialWatchesCount);
  };

  useEffect(() => {
    if (fetchedProducts.length <= watchesToLoad) {
      setMoreToLoad(false);
    }
  }, [watchesToLoad]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        pb: 5,
      }}
    >
      <ShopHeader title="Men's Watches" sx={{ width: { xs: '80vw', md: '60vw' } }} />
      <Grid
        container
        sx={{
          width: { xs: '70vw', md: '60vw' },
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          pt: 3,
          pb: { xs: 5, md: 10 },
        }}
      >
        {fetchedProducts.slice(0, watchesToLoad).map(({ ...props }) => (
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={props.title}
          >
            <WatchCard {...props} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledMoreButton
          onClick={handleClick}
          disabled={!moreToLoad}
        />
      </Box>

    </Box>
  );
};

export default MensWatchesPage;
