import React, { ReactFragment } from 'react';
import {
  Button,
  Typography,
  styled,
} from '@mui/material';
import Watch from '../../types/watch';

type MainPartInfoProps = ReactFragment & {
  watch?: Watch
};

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: '8vw',
  letterSpacing: 6,
  textTransform: 'uppercase',
  textAlign: 'center',
  paddingTop: '3vw',
  paddingBottom: '4vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '5vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    fontSize: '2vw',
    textAlign: 'left',
    paddingTop: '5vw',
    paddingBottom: 0,
    lineHeight: 0.8,
  },
  [theme.breakpoints.up('xl')]: {
    width: '40%',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '3vw',
  letterSpacing: 6,
  padding: '0.3vw 0',
  textTransform: 'uppercase',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9vw',
    textAlign: 'left',
  },
}));

const StyledPrice = styled(Typography)(({ theme }) => ({
  fontSize: '10vw',
  fontFamily: 'Julius Sans One',
  letterSpacing: 8,
  textTransform: 'uppercase',
  textAlign: 'center',
  paddingTop: '5vw',
  paddingBottom: '5vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '8vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5vw',
    paddingTop: '2vw',
    paddingBottom: '2vw',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '50%',
  color: theme.palette.secondary.main,
  boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  '&>p': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('xl')]: {
    width: '40%',
  },
}));

const MainPartInfo: React.FC<MainPartInfoProps> = ({ watch }) => (
  <>
    <StyledHeader>{watch?.title}</StyledHeader>
    <StyledDescription>{watch?.descriptionShort}</StyledDescription>
    <StyledPrice>{`${watch?.price.toLocaleString()} €`}</StyledPrice>
    <StyledButton>
      <Typography sx={{ letterSpacing: 4 }}>
        ADD TO CART
      </Typography>
    </StyledButton>
  </>
);

export default MainPartInfo;
