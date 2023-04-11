import { AppRouter } from '@/shared/config/router';
import { AppStore } from '@/app/store';

function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}

export default App;
