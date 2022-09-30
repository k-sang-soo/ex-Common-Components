import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      black: string;
      white: string;
      orange: string;
      dark_orange: string;
      offWhite: string;
      lightgray: string;
      silver: string;
      gray: string;
      darkgray: string;
    };
  }
}
