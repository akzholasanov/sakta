import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from 'shared/ui/fallback';

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

const queryClient = new QueryClient();

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
