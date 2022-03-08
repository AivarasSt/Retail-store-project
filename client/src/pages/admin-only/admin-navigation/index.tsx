import React from 'react';
import AdminMobileNavigation from './admin-mobile-navigation';
import AdminDesktopNavigation from './admin-desktop-navigation';

const AdminNavigation: React.FC = () => {
  const breakpoint = 'md';
  return (
    <>
      <AdminMobileNavigation
        breakpoint={breakpoint}
      />
      <AdminDesktopNavigation
        breakpoint={breakpoint}
      />
    </>
  );
};
export default AdminNavigation;
