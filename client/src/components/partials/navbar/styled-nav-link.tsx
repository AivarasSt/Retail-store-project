import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const StyledNavLink = styled(NavLink)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  padding: '0.2vw',
  paddingBottom: '0.3vw',
  marginTop: '1vw',
  letterSpacing: 6,
  width: 'auto',
  ':hover': {
    boxShadow: `0px 1px ${color || theme.palette.secondary.main}`,
  },
}));

export const StyledScrollLink = styled(ScrollLink)(({ theme, color }) => ({
  color: `${color || theme.palette.secondary.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  padding: '0.2vw',
  paddingBottom: '0.3vw',
  marginTop: '1vw',
  letterSpacing: 6,
  width: 'auto',
  cursor: 'pointer',
  ':hover': {
    boxShadow: `0px 1px ${color || theme.palette.secondary.main}`,
  },
}));

export default StyledNavLink;
