import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    footer: {
      height: {
        desktop: number,
        mobile: number,
      };
    };
  }
}
