import { AppRouter} from './routing';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
