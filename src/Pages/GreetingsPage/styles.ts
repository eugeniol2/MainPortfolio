import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  max-width: 2000px;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 64px;
  }
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 422px;

  @media (max-width: 1300px) {
    max-width: none;
  }

  > img {
    width: 250px;
    border-radius: 32px;
  }
`;
