import { useAppDispatch, useAppSelector } from '@/app/store';
import { Badge } from '@/shared/ui/Badge';
import {
  selectFilters,
  setCategories
} from '@/widgets/Filters/lib/filtersSlice';
import { categories } from '../lib/categoriesConfig';
import { manageCategories } from '../lib/manageCategories';

export default function Categories() {
  const { categories: activeCategories } = useAppSelector(selectFilters);

  const dispatch = useAppDispatch();

  const handleClickCategory = (category: string) => {
    const updatedCategories = manageCategories(activeCategories, category);

    dispatch(setCategories(updatedCategories));
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
