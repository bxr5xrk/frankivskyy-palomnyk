import { Badge } from '@/shared/ui/Badge';
import { useLocation, useNavigate } from 'react-router-dom';
import { categories } from '../lib/categoriesConfig';

export default function Categories() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const activeCategories = decodeURI(search)
    .slice(1)
    .split('&')
    .flatMap((i) => i.split('category=').filter(Boolean));

  const handleClickCategory = (category: string) => {
    const isCategoryExists = activeCategories.find((i) => i === category);

    if (isCategoryExists) {
      const newCategories = activeCategories
        .filter((i) => i !== category)
        .map((i) => `category=${encodeURI(i)}`)
        .filter(Boolean)
        .join('&');

      navigate('?' + newCategories, { replace: true });
    } else {
      const newCategories = [...activeCategories, category]
        .map((i) => `category=${encodeURI(i)}`)
        .filter(Boolean)
        .join('&');

      navigate('?' + newCategories, { replace: true });
    }
  };

  return (
    <div className="flex gap-2 p-2">
      {categories.map((category) => (
        <Badge
          isActive={activeCategories.includes(category)}
          onClick={() => handleClickCategory(category)}
          title={category}
          key={category}
        />
      ))}
    </div>
  );
}
