import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../lib/config';
import type { Tour } from '../types/tours';

export const toursApi = createApi({
  reducerPath: 'toursService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/tours'
  }),
  endpoints: (builder) => ({
    getTours: builder.query<Tour[], unknown>({
      query: () => ''
    }),
    getSingleTour: builder.query<Tour, number>({
      query: (id) => `/${id}`
    })
  })
});

const { useGetToursQuery: useTours, useGetSingleTourQuery: useTour } = toursApi;

export { useTours, useTour };
