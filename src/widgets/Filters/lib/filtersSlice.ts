import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export interface filtersState {
  categories: string[];
  query: string;
  orderBy: string;
}

const initialState: filtersState = {
  categories: [],
  query: '',
  orderBy: 'DATE'
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload;
    }
  }
});

export const { setCategories, setQuery, setOrder } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
