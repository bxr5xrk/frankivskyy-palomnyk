import { NavBar } from '@/features/NavBar';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b pb-2">
      {/* logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" width={50} />

        <div className="flex flex-col">
          <h1 className="text-default text-xl font-bold">
            Франківський Паломник
          </h1>
          <h3 className="font-semibold text-primary-700">
            #Ми знаємо напрямок
          </h3>
        </div>
      </Link>

      <NavBar />

      <div></div>
    </header>
  );
}
