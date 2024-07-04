import {
  TypographyOptions,
  TypographyStyle,
} from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {}

  interface Typography {}
}

export const UITypography: Record<
  keyof TypographyPropsVariantOverrides,
  TypographyStyle
> = {
  h1: {
    fontSize: 48,
    fontWeight: 500,
    lineHeight: 1.5,
  },

  body1: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,
  },

  body2: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 400,
  },
};

export const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontSize: 16,
  fontFamily: roboto.style.fontFamily,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  ...UITypography,
};
