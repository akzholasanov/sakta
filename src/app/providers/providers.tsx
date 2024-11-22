import { FC } from 'react';
import { Fallback } from 'shared/ui/fallback';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider } from 'entities/theme';

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

const queryClient = new QueryClient();

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
