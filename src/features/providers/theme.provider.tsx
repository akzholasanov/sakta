import { Theme, THEME_KEY, ThemeContext } from 'features/config/theme.context';
import { FC, useMemo, useState } from 'react';

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
