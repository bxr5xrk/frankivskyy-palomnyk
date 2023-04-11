// import { NavBar } from '@/features/NavBar';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b pb-2">
      {/* logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 sm:w-12" />

        <div className="flex flex-col">
          <h1 className="text-base font-bold md:text-xl">
            Франківський Паломник
          </h1>
          <h3 className="font-medium text-primary-700 md:font-semibold">
            #Ми знаємо напрямок
          </h3>
        </div>
      </Link>

      {/* <NavBar /> */}

      <div></div>
    </header>
  );
}
