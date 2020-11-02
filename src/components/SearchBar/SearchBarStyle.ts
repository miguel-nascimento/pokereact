import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.8rem 0;
  font-size: 1.8rem;

  input[type="text"] {
    background-color: ${(props) => props.theme?.color.input};
    font-size: 1.6rem;
    height: 3.5vh;
    width: 50vw;
    width: clamp(33vw, 45vw, 50vw);
    border: none;
    outline: none;
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme?.color.border} inset;
    margin-bottom: 1rem;
    border-radius: 0.66rem;
    padding: 0.66rem 1rem;
    color: ${(props) => props.theme?.color.text};
  }

  input:focus {
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme?.color.inputFocus}
      inset;
  }

  input::placeholder {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${(props) => props.theme?.color.placeholder};
  }
`;
