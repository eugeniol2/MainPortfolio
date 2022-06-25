import styled from '@emotion/styled';

export const Container = styled.div`
  // Feet animation
  #Feet {
    animation: feetMove 2s infinite ease-in-out alternate;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  @keyframes feetMove {
    from {
      transform: rotateZ(10deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

  // Hand animation
  #Hand {
    animation: feetMove 3s infinite ease-in-out alternate;
    transform-origin: bottom;
    transform-box: fill-box;
  }
  @keyframes handMove {
    from {
      transform: rotateZ(10deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

  // Head animation
  #Head {
    animation: feetMove 3s infinite ease-in-out alternate;
    transform-origin: center;
    transform-box: fill-box;
  }
  @keyframes handMove {
    from {
      transform: rotateZ(15deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

  // Stacks animation
  #HTML5,
  #GitIcon,
  #CssIcon,
  #ReactIcon {
    animation: HTML5RotateMove 10s infinite ease-in-out alternate;
    /* animation: HTML5YaxisMove 2s infinite ease-in-out alternate; */
    transform-origin: center;
    transform-box: fill-box;
  }
  @keyframes HTML5RotateMove {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  @keyframes HTML5YaxisMove {
    from {
      transform: translateY(20%);
    }
    to {
      transform: translateY(40%);
    }
  }
`;
