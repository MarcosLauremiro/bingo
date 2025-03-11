// Sugestão de uso:
// primary = mais escuro (base)
// secondary = destaque
// tertiary = detalhes
// neutral = neutro/claro

export interface ThemeColors {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    neutral: string;
  };
}

export type ThemeName = 'purple' | 'orange' | 'green' | 'light' | 'dark'

export const purpleTheme: ThemeColors = {
  colors: {
    primary: "#2E073F",
    secondary: "#7A1CAC",
    tertiary: "#AD49E1",
    neutral: "#EBD3F8",
  },
};

export const orangeTheme: ThemeColors = {
  colors: {
    primary: "#443627",
    secondary: "#D98324",
    tertiary: "#EFDCAB",
    neutral: "#F2F6D0",
  },
};

export const greenTheme: ThemeColors = {
  colors: {
    primary: "#5D8736",
    secondary: "#809D3C",
    tertiary: "#A9C46C",
    neutral: "#F4FFC3",
  },
};

export const lightTheme: ThemeColors = {
  colors: {
    primary: "#F8FAFC",
    secondary: "#D9EAFD",
    tertiary: "#BCCCDC",
    neutral: "#9AA6B2",
  },
};

export const darkTheme: ThemeColors = {
  colors: {
    primary: "#021526",
    secondary: "#03346E",
    tertiary: "#6EACDA",
    neutral: "#E2E2B6",
  },
};
