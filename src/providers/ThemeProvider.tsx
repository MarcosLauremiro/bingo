import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useThemeStore } from '../store/theme/themeStore';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { currentTheme } = useThemeStore();
  return <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>;
};