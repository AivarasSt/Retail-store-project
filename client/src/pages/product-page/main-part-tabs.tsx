import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  AppBar,
  styled,
  BoxProps,
} from '@mui/material';
import getWindowWidth from '../../helpers/window-helpers';
import Watch from '../../types/watch';
import TabPanel from './tab-panel';

type FullWidthTabsProps = BoxProps & {
  watch?: Watch
};

const StyledAppBar = styled(AppBar)(({
  position: 'static',
  boxShadow: 'none',
  width: '90%',
  minHeight: 'none',
  zIndex: '10',
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '3vw',
  letterSpacing: 6,
  padding: '10px',
  minHeight: '0',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.7vw',
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: '0',
  display: 'flex',
  justifyContent: 'space-around',
  '& .MuiSvgIcon-root': {
    fill: theme.palette.secondary.main,
  },
}));

const FullWidthTabs: React.FC<FullWidthTabsProps> = ({ watch }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const winWidth = getWindowWidth();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%', paddingY: '3vw' }}>
      <Box sx={{
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <StyledAppBar>
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant={winWidth < theme.breakpoints.values.md ? 'scrollable' : 'fullWidth'}
            scrollButtons
            allowScrollButtonsMobile
            aria-label="full width tabs example"
          >
            <StyledTab label="DESCRIPTION" />
            <StyledTab sx={{ marginX: 1 }} label="SPECIFICATION" />
            <StyledTab label="MOVEMENT" />
          </StyledTabs>
        </StyledAppBar>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {watch?.description}
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
        >
          {watch?.specification}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {watch?.movement}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default FullWidthTabs;
