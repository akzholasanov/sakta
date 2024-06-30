import { FC } from 'react';
import { ThemeProvider } from 'entities';

interface IProviders {
  readonly children: React.ReactNode;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
