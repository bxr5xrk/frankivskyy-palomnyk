import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center p-2">
      <Header />

      <main className="h-full w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
