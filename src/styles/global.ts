import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;

    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 520px;
    padding: 4rem 3rem;
    border-radius: 0.25rem;
    background-color: var(--background);
    position: relative;
  }

  .react-modal-close {
    border: none;
    background-color: transparent;
    transition: filter 0.2s;

    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;