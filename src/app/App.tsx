import { AppRouter } from './router';
import { AppStore } from './store';

function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}

export default App;
