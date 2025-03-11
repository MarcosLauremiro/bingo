// styled.d.ts
import "styled-components";
import { ThemeColors } from "./src/Theme/colors";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      neutral: string;
    };
  }
}
