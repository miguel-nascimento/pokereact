import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme?.color.background};
    height: 100vh;
    color: ${(props) => props.theme?.color.text};
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme?.color.primary};
    height: 10.05vh;
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme?.color.track};
  }

  :root {
    font-size: 62.5%;
  }

  .App {
    min-height: 100vh;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 4rem;
  }

  .footer {
    margin-bottom: 1rem;
    height: 20px;
  }

  @media (min-width: 375px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1366px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1920px) {
    .grid-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
