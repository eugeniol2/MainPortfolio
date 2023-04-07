import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  marginTop: '64px',
  color: 'white',
  display: 'grid',
  justifyContent: 'center',
  rowGap: '16px',
  columnGap: '16px',
  gridTemplateColumns: '340px 334px 334px',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'auto',
    rowGap: '32px',
  },
}));
