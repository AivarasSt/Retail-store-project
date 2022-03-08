import React from 'react';
import {
  PUBLIC_ONLY,
  ADMIN,
  AuthType,
} from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
import AdminProtector from './admin-protector';

type ProtectPageEnum = {
  [Key in AuthType]: (Page: React.FC) => React.ReactNode
};

const protectPageEnum: ProtectPageEnum = {
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
};

export default protectPageEnum;
