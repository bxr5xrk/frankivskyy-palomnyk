import { cl } from '@/shared/lib/cl';

interface BadgeProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Badge({ title, onClick, isActive }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cl(
        isActive ? 'bg-pink-800 text-pink-100' : 'bg-pink-100 text-pink-800',
        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
      )}
    >
      {title}
    </button>
  );
}
