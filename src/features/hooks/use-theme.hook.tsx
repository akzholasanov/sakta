import { Theme, THEME_KEY, ThemeContext } from 'features/config/theme.context';
import { useCallback, useContext } from 'react';

interface ITheme {
  readonly theme: Theme;
  readonly toggleTheme: () => void;
}

export const useTheme: () => ITheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    toggleTheme,
  } as ITheme;
};
