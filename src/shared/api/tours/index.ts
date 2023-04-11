import { API_URL } from '@/shared/config';
import type { Tour } from '@/shared/types/tours';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toursApi = createApi({
  reducerPath: 'toursService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/tours'
  }),
  endpoints: (builder) => ({
    getTours: builder.query<
      Tour[],
      { applyFilters: boolean; order: string; categories: string }
    >({
      query: ({ applyFilters, order, categories }) =>
        applyFilters ? '?' + order + '&' + categories : ''
    }),
    getSingleTour: builder.query<Tour, number>({
      query: (id) => `/${id}`
    })
  })
});

const { useGetToursQuery, useGetSingleTourQuery: useTour } = toursApi;

export { useGetToursQuery, useTour };
