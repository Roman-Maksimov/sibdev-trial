import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gray: string;
  }

  interface PaletteOptions {}

  interface Palette {}
}

export const palette: PaletteOptions = {
  text: {
    disabled: '#969696',
  },

  background: {
    gray: '#ededed',
  },
};
