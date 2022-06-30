import styled from '@emotion/styled';

import Button from '@mui/material/Button';

export const CustomButton = styled(Button)({
  marginTop: '16px',
  width: '121px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  // backgroundColor: '#0063cc',
  // color: 'white',
  // borderColor: 'white',
  fontFamily: ['inter'].join(','),
  '&:hover': {
    fontWeight: 'bold',
    borderColor: 'white',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    // backgroundColor: '#0062cc',
    // borderColor: '#005cbf',
  },
  // '&:focus': {
  //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  // },
});

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 143px 0 0 176px;
  width: 422px;
`;
