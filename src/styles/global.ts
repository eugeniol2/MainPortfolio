import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33CC95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //será utizado a unidade de medida REM, pois 1 REM é igual ao tamanho da fonte, a depender do contexto
    //pois com esta unidade de medida o sistema fica adaptável ao device que o usuário está utilizando.
    html {
        @media (max-width: 1080px) {// se a tela do usuário for menor que 1080px a fonte será reduzida para 93.75%
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) { // se a tela do usuário for menor que 720px a fonte será reduzida para 87.5%
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const MainContainer = styled.div`
  margin: 0 112px 0 112px;
  scroll-snap-align: start;
`;

export const PageContainer = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
