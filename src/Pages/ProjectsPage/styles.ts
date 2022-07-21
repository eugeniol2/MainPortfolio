import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  &:nth-child(even) {
    flex-direction: column-reverse;
  }

  /* @media (max-width: 1600px) {
    gap: 30px;
  } */
`;

export const WrapperContainer = styled.div`
  flex-direction: column;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;

  &:nth-child(even) {
    align-items: center;
  }
`;
