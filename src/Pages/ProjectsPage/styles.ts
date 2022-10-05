import styled from '@emotion/styled';

// export const Container = styled.div`
//   margin-top: 64px;
//   flex-direction: column;
//   display: flex;

//   &:nth-child(even) {
//     align-items: center;
//   }
// `;

export const Container = styled.div`
  margin-top: 64px;
  /* height: calc(100vh - 72px); */
  color: white;
  display: grid;
  justify-content: center;
  row-gap: 16px;
  column-gap: 16px;
  grid-template-columns: 334px 334px 334px;
`;
