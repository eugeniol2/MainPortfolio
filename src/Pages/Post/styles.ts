import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 64px;
  flex-direction: column;
  display: flex;

  &:nth-child(even) {
    align-items: center;
  }
`;

// &:nth-child(even) {
//   flex-direction: row-reverse;
//   align-self: flex-end;
// }
