import * as React from 'react';
import AuthService from 'services/auth-service';
import {
  Box,
  Button,
  Grid,
  GridProps,
  styled,
} from '@mui/material';
import StyledNavLink from '../../../components/partials/navbar/styled-nav-link';

type AdminDesktopNavigationProps = GridProps & {
  breakpoint: string,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.light,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  letterSpacing: 6,
  borderRadius: 0,
  ':hover': {
    boxShadow: `0px 1px ${theme.palette.secondary.main}`,
  },
}));

const handleLogout = () => {
  AuthService.logout();
};

const AdminDesktopNavigation: React.FC<AdminDesktopNavigationProps> = ({ breakpoint }) => (
  <StyledGrid item md={2} xl={1} sx={{ display: { xs: 'none', [breakpoint]: 'flex' } }}>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    }}
    >
      <StyledNavLink to="/admin/dashboard">
        Orders
      </StyledNavLink>
      <StyledNavLink to="/admin/products">
        Products
      </StyledNavLink>
      <StyledNavLink to="/shop">
        Shop
      </StyledNavLink>
    </Box>
    <Box sx={{ mb: 3 }}>
      <StyledButton variant="text" onClick={handleLogout}>Logout</StyledButton>
    </Box>
  </StyledGrid>
);

export default AdminDesktopNavigation;
