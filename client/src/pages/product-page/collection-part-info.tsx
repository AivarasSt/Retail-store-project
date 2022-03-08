import React from 'react';
import {
  BoxProps,
  Button,
  Typography,
  styled,
  Box,
} from '@mui/material';
import Collection from 'types/collection';
import CustomDivider from '../../components/divider/divider';

type CollectionPartInfoProps = BoxProps & {
  collectionName?: Collection
};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  margin: '3vw',
  boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  '&>p': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '1.5vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '40%',
  },
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: '4vw',
  letterSpacing: 6,
  textTransform: 'uppercase',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.5vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3vw',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1vw',
  },
}));

const CollectionPartInfo: React.FC<CollectionPartInfoProps> = ({ collectionName }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: { xs: '100%', lg: '60%' },
      width: { xs: '90%', lg: '100%' },
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledHeader>COLLECTION</StyledHeader>
      <CustomDivider sx={{ my: '1vw', width: { xs: '10vw', md: '8vw', lg: '4vw' } }} />
    </Box>
    <Typography
      sx={{
        letterSpacing: 4,
        fontSize:
        {
          xs: '6vw',
          md: '3vw',
          lg: '2vw',
          xl: '1.5vw',
        },
      }}
    >
      {collectionName?.title}
    </Typography>
    <Typography
      sx={{
        textAlign: 'center',
        my: { xs: '3vw', lg: '1vw' },
        fontSize:
        {
          xs: '3.5vw',
          sm: '2.5vw',
          md: '1.7vw',
          lg: '1.3vw',
          xl: '0.9vw',
        },
      }}
    >
      {collectionName?.description}
    </Typography>
    <CustomDivider sx={{ my: '1.5vw', width: { xs: '10vw', md: '8vw', lg: '4vw' } }} />
    <StyledButton>
      <Typography sx={{ letterSpacing: 4 }}>
        More from this brand
      </Typography>
    </StyledButton>
  </Box>
);

export default CollectionPartInfo;
