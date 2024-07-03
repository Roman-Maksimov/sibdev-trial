import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gray: string;
  }

  interface PaletteOptions {
    hover: string;
  }

  interface Palette {
    hover: string;
  }
}

export const palette: PaletteOptions = {
  hover: '#f1fdfd',

  background: {
    gray: '#f9f9f9',
  },
};
