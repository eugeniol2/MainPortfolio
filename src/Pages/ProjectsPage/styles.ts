import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 64px;
  flex-direction: column;
  display: flex;
  gap: 32px;

  &:nth-child(even) {
    align-items: center;
  }
`;
