import styled from '@emotion/styled';

export const Container = styled.div`
  #Hand {
    animation: handMove 3s infinite ease-in-out alternate;
    transform-origin: bottom;
    transform-box: fill-box;
  }
  @keyframes handMove {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(10deg);
    }
  }
`;
