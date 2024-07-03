'use client';
import { createTheme } from '@mui/material';

import components from './components/components';
import { mixins } from './mixins';
import { palette } from './palette';
import { transitions } from './transitions';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components,
  mixins,
  transitions,
});
