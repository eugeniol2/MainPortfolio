import { css } from '@emotion/react';
import { colors } from './theme';

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.background_300};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.background_400};
  }
  body {
    background: ${colors.background_500};
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  html {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
  button,
  a {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }
`;
