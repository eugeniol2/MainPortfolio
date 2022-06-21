// import styled, { createGlobalStyle } from 'styled-components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = css`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
  button {
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  margin: 0 112px 0 112px;
  height: 100%;
`;

export const PageContainer = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  scroll-snap-align: start;
`;
