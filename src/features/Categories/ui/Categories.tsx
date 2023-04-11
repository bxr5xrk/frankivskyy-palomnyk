import { selectFilters, setCategories } from '@/entities/tours';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { manageCategories } from '@/shared/lib/categories';
import { Badge } from '@/shared/ui/Badge';
import { categories } from '../lib/categoriesConfig';

export default function Categories() {
  const { categories: activeCategories } = useAppSelector(selectFilters);

  const dispatch = useAppDispatch();

  const handleClickCategory = (category: string) => {
    const updatedCategories = manageCategories(activeCategories, category);

    dispatch(setCategories(updatedCategories));
  };

  return (
    <div className="flex flex-wrap gap-2">
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
