import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import LogoImg from '../../assets/svg/thin-white-line-white.svg';
import LogoImgDark from '../../assets/svg/thin-white-line-dark.svg';

const LogoContainer = styled(Link)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2, 0),
  '&>img': {
    height: '35px',
  },
}));

const Logo: React.FC = (props) => {
  const location = useLocation();
  return (
    <LogoContainer {...props} to="/">
      <img src={location.pathname.includes('/shop') ? LogoImgDark : LogoImg} alt="page logo" />
    </LogoContainer>
  );
};

export default Logo;
