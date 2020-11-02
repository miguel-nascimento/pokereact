import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 0 10rem;
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
`;
