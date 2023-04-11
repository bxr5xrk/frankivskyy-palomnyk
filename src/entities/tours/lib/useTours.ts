import { useGetToursQuery } from '@/shared/api/tours';
import { useAppSelector } from '@/app/store';
import {
  stringifyCategoriesToQuery,
  stringifyOrderToQuery
} from '@/shared/lib/query';
import { selectFilters } from '../model/filtersSlice';

export const useTours = ({ filters }: { filters: boolean }) => {
  const { categories, orderBy } = useAppSelector(selectFilters);

  const orderParam = stringifyOrderToQuery(orderBy);
  const categoriesParam = stringifyCategoriesToQuery(categories);

  return useGetToursQuery({
    categories: categoriesParam,
    order: orderParam,
    applyFilters: filters
  });
};
