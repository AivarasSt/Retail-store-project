import React from 'react';
import Box from '@mui/material/Box';
import DesktopFooter from './desktop';
import MobileFooter from './mobile';

const breakpoint = 'md';

const Footer: React.FC = () => (
  <Box>
    <DesktopFooter breakpoint={breakpoint} />
    <MobileFooter breakpoint={breakpoint} />
  </Box>
);

export default Footer;
