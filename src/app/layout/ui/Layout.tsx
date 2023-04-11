import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center bg-white text-slate-800">
      <div className="flex w-full max-w-7xl flex-grow flex-col justify-center p-2">
        <Header />

        <main className="w-full flex-grow p-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
