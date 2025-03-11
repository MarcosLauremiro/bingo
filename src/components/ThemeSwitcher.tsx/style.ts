import styled, { DefaultTheme } from "styled-components";

interface ThemeProps {
  theme: DefaultTheme;
}

export const themeProp = <K extends keyof DefaultTheme['colors']>(color: K) => 
    ({ theme }: { theme: DefaultTheme }) => theme.colors[color];

export const ContentColor = styled.div<ThemeProps>`
  background-color: ${themeProp('primary')};
  color: ${({ theme }) => theme.colors.neutral};
  padding: 1rem 2rem;
`;
