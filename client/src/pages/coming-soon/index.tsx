import React from 'react';
import {
  Box,
} from '@mui/material';
import underConstruction from 'assets/img/underConstruction.png';

const ComingSoonPage: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      mt: '5vw',
      justifyContent: 'center',
      alignItems: 'start',
    }}
  >
    <Box sx={{
      height: '40%',
      width: '80%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${underConstruction})`,
    }}
    />
  </Box>
);

export default ComingSoonPage;
