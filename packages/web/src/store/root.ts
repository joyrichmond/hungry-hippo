import { combineReducers } from 'redux';

import { categoriesReducer, CategoriesState } from './categories';

export type AppState = {
  categories: CategoriesState | null;
};

export const rootReducer = combineReducers<AppState>({
  categories: categoriesReducer,
});
