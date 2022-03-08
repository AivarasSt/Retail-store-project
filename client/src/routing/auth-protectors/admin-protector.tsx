import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'store/hooks';
import { authSelector } from 'store/auth';
import { Box } from '@mui/material';
import routes from '../routes';

const AdminProtector: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.AdminLoginPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user?.role !== 'ADMIN') {
    return <Navigate to={routes.HomePage} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AdminProtector;
