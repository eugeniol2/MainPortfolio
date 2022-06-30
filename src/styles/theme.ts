import { createTheme } from '@mui/material/styles';

export const colors = {
  primary_50: '#EEE8FC',
  primary_75: '#B99FF3',
  primary_200: '#713DE7',
  primary_300: '#5415E2',
  primary_400: '#3B0F9E',
  secondary_200: '#EF892B',
  secondary_300: '#EC7100',
  secondary_400: '#A54F00',
  success: '#19DB4F',
  danger: '#FF0404',
  warning: '#FFC107',
  info: '#00a2ff',
  dark: '#0e1b20',
  light: '#aaa',
  // background
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
    h3: {
      color: colors.primary_75,
    },
    h6: {
      color: colors.primary_75,
    },
    body1: {
      color: colors.primary_50,
    },
  },
});
