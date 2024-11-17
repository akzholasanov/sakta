import { AppRouter } from './routers';
import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
