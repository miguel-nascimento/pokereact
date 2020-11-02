import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  padding: 0 10rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: ${(props) => props.theme?.color.primary};
  height: 10vh;

  .logo {
    grid-column-start: 2;
    height: 7.5vh;
    justify-self: center;
    align-self: center;
  }

  .switch {
    justify-self: flex-end;
    align-self: center;
  }
`;
