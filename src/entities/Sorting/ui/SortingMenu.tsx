import { useAppDispatch } from '@/app/store';
import SelectMenu from '@/shared/ui/SelectMenu/ui/SelectMenu';
import { setOrder } from '@/widgets/Filters/lib/filtersSlice';
import { options } from '../lib/sortingValues';

export default function SortingMenu() {
  const dispatch = useAppDispatch();

  const onChange = (option: string) => {
    dispatch(setOrder(option));
  };

  return (
    <SelectMenu
      id="sorting"
      label="Сортувати по:"
      options={options}
      onChange={onChange}
    />
  );
}
