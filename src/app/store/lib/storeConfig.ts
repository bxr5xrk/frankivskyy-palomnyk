import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { toursApi } from '@/shared/api/tours';
import { filtersSlice } from '@/entities/tours/model/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    [toursApi.reducerPath]: toursApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([toursApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
