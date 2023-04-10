import { cl } from '@/shared/lib/cl';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Головна', href: '/' },
  { name: 'Тури', href: '/tours' },
  { name: 'Календар', href: '/calendar' }
];

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cl(
            pathname === item.href ? 'text-primary' : ' text-slate-700',
            'text-sm font-semibold leading-6 hover:text-primary'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
