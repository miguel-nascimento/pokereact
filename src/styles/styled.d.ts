import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      background: string;
      text: string;
      placeholder: string;
      track: string;
      cardBelow: string;
      cardBack: string;
      border: string;
      input: string;
      inputFocus: string;
      on: string;
      off: string;
    };
  }
}
