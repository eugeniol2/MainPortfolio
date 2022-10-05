import { NoEncryption } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

export const colors = {
  primary_50: '#EEE8FC',
  primary_75: '#9cf5ce',
  primary_200: '#37eb9b',
  primary_300: '#0ee787',
  primary_400: '#0aa25f',
  secondary_200: '#91d1e8',
  secondary_300: '#7ac7e3',
  secondary_400: '#558b9f',
  success: '#19DB4F',
  danger: '#FF0404',
  warning: '#FFC107',
  info: '#00a2ff',
  dark: '#0e1b20',
  light: '#aaa',
  // background #111728
  background_300: '#150637',
  background_400: '#0F0427',
  background_500: '#0D0422',
  /// black
  black_200: '#2B2B2B',
  black: '#000000',
  // white
  white: '#FFFFFF',
  light_gray: 'rgb(230,230,230)',
  dove_gray: '#d5d5d5',
  dim_grey: '#696969',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary_300,
    },
    secondary: {
      main: colors.secondary_300,
    },
  },
  typography: {
    button: {
      color: colors.white,
    },
    h3: {
      color: colors.primary_200,
    },
    h6: {
      color: colors.primary_200,
    },

    body1: {
      color: colors.primary_50,
      lineHeight: '24px',
    },
  },
});
