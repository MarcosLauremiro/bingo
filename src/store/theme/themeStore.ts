import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  purpleTheme,
  darkTheme,
  greenTheme,
  lightTheme,
  orangeTheme,
} from "../../Theme/colors";
import { ThemeColors, ThemeName } from "../../Theme/colors";

interface ThemeStore {
  currentTheme: ThemeColors;
  themes: Record<ThemeName, ThemeColors>;
  setCurrentTheme: (themeName: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: lightTheme,
      themes: {
        purple: purpleTheme,
        dark: darkTheme,
        green: greenTheme,
        light: lightTheme,
        orange: orangeTheme,
      },
      setCurrentTheme: (themeName) =>
        set((state) => ({
          currentTheme: state.themes[themeName] || state.currentTheme,
        })),
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({
        currentTheme: state.currentTheme as ThemeColors,
      }),
    }
  )
);
