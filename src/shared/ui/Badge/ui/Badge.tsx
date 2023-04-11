import { cl } from '@/shared/lib/cl';

interface BadgeProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
  theme?: 'primary' | 'secondary';
}

export default function Badge({ title, onClick, isActive, theme }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cl(
        theme
          ? theme === 'primary'
            ? 'bg-primary-100 text-primary-800'
            : ''
          : null,
        isActive
          ? 'bg-primary-800 text-primary-100'
          : 'bg-primary-100 text-primary-800',
        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
      )}
    >
      {title}
    </button>
  );
}
