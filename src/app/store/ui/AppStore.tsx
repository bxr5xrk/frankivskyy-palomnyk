import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/storeConfig';

interface AppStoreProps {
  children: ReactNode;
}

export default function AppStore({ children }: AppStoreProps) {
  return <Provider store={store}>{children}</Provider>;
}
