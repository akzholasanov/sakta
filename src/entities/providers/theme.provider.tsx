import { useState, useMemo, FC } from 'react';
import { THEME_KEY, Theme, ThemeContext } from 'entities/config/theme.context';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.DARK;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
