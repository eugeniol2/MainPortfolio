import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ResumeButtonContainer = styled(Button)({
  marginTop: '16px',
  width: '121px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  fontWeight: 'semi-bold',
  fontFamily: ['inter'].join(','),
  '&:active': {
    boxShadow: 'none',
  },
});
