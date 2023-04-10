import { NavBar } from '@/widgets/NavBar';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b pb-2">
      {/* logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" width={50} />

        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-default">
            Франківський Паломник
          </h1>
          <h3 className="font-semibold text-secondary">#Ми знаємо напрямок</h3>
        </div>
      </Link>

      <NavBar />

      <div></div>
    </header>
  );
}
