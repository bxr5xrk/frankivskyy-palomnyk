import { setOrder } from '@/entities/tours';
import { useAppDispatch } from '@/app/store';
import { SelectMenu } from '@/shared/ui/SelectMenu';
import { options } from '../lib/sortingValues';

export default function SortingMenu() {
  const dispatch = useAppDispatch();

  const onChange = (option: string) => dispatch(setOrder(option));

  return (
    <SelectMenu
      id="sorting"
      label="Сортувати по:"
      options={options}
      onChange={onChange}
    />
  );
}
