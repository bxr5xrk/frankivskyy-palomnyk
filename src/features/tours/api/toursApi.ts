import { useAppSelector } from '@/app/store';
import { createQueryForCategories } from '@/entities/Categories/lib/manageCategories';
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
    getTours: builder.query<Tour[], string>({
      query: (categories) => (categories.length ? '?' + categories : '')
    }),
    getSingleTour: builder.query<Tour, number>({
      query: (id) => `/${id}`
    })
  })
});

const useTours = () => {
  const { categories } = useAppSelector(selectFilters);

  return useGetToursQuery(createQueryForCategories(categories));
};

const { useGetToursQuery, useGetSingleTourQuery: useTour } = toursApi;

export { useTours, useTour };
