import { useThemeStore } from "../../store/theme/themeStore";
import { ThemeName } from "../../Theme/colors";
import { ContentColor } from "./style";

export const ThemeSwitcher = () => {
  const { setCurrentTheme } = useThemeStore();

  const themes: ThemeName[] = ["purple", "orange", "green", "light", "dark"];

  return (
    <ContentColor>
      {themes.map((theme) => (
        <button key={theme} onClick={() => setCurrentTheme(theme)}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </ContentColor>
  );
};
