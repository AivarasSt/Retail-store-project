import * as React from 'react';
import {
  Box,
  Typography,

} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ textAlign: 'center' }}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
