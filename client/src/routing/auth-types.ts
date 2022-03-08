export const PUBLIC_ONLY = 'public-only';
export const ADMIN = 'admin';

export type AuthType =
  typeof PUBLIC_ONLY
  | typeof ADMIN;
