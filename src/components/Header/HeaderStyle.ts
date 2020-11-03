import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: ${(props) => props.theme?.color.primary};
  align-items: center;
  justify-content: center;
  height: 10vh;

  .logo {
    height: 7.5vh;
    grid-column-start: 2;
    justify-self: center;
  }

  .switcher {
    justify-self: flex-end;
  }

  padding: 0 2rem;

  @media (min-width: 320px) {
    padding: 0 3rem;
  }

  @media (min-width: 375px) {
    padding: 0 3rem;
  }

  @media (min-width: 768px) {
    padding: 0 9rem;
  }

  @media (min-width: 1024px) {
    padding: 0 8rem;
  }

  @media (min-width: 1366px) {
    padding: 0 10rem;
  }
`;
