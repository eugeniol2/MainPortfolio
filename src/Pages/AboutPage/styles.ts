// import styled from '@emotion/styled';
import { styled } from '@mui/material/styles';
import { TextBoxContainer } from '../GreetingsPage/styles';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: '98px',
}));

export const WrapperContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100vw',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '64px',
  },
}));

export const TextBoxContainerAbout = styled(TextBoxContainer)``;
