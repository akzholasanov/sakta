import { Providers } from './providers';
import { AppRouter } from './routers';

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
