import styled from "styled-components";

export const StyledCard = styled.div`
  width: 50%;
  border-radius: 0.8rem;
  padding: 0.2rem 1.6rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-self: center;
  justify-self: center;
  transition: all 0.2s ease-out;

  :hover {
    transform: scale(1.12);
  }

  .image-container {
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: ${(props) => props.theme?.color.cardBack};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
  }

  .image-container img {
    max-width: 200%;
    height: auto;
  }

  .details {
    border-radius: 0 0 0.8rem 0.8rem;
    background-color: ${(props) => props.theme?.color.cardBelow};
    text-align: center;
    text-transform: capitalize;
  }

  .details h1 {
    font-size: 2.7rem;
    margin: 0;
    padding: 2rem;
  }

  @media (min-width: 320px) {
    .details h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: 375px) {
    .details h1 {
      font-size: 2.3rem;
    }
  }
`;
