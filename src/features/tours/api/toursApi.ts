import { useAppSelector } from '@/app/store';
import { createQueryForCategories } from '@/entities/Categories/lib/manageCategories';
import { stringifyOrderToQuery } from '@/entities/Sorting/lib/stringifyOrderForQuery';
import { selectFilters } from '@/widgets/Filters';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../lib/config';
import type { Tour } from '../types/tours';

export const toursApi = createApi({
  reducerPath: 'toursService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/tours'
  }),
  endpoints: (builder) => ({
    getTours: builder.query<Tour[], { order: string; categories: string }>({
      query: ({ order, categories }) => '?' + order + categories
    }),
    getSingleTour: builder.query<Tour, number>({
      query: (id) => `/${id}`
    })
  })
});

const useTours = () => {
  const { categories, orderBy } = useAppSelector(selectFilters);

  const orderParam = stringifyOrderToQuery(orderBy);
  const categoriesParam = createQueryForCategories(categories);

  return useGetToursQuery({ categories: categoriesParam, order: orderParam });
};

const { useGetToursQuery, useGetSingleTourQuery: useTour } = toursApi;

export { useTours, useTour };
