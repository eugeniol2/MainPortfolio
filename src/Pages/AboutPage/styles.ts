import styled from '@emotion/styled';
import { TextBoxContainer } from '../GreetingsPage/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 98px;
`;

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 64px;
    text-align: center;
  }
`;

export const TextBoxContainerAbout = styled(TextBoxContainer)``;
