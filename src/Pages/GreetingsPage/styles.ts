import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100vw',
  maxWidth: '1500px',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '64px',
  },
}));

export const TextBoxContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '422px',
}));
