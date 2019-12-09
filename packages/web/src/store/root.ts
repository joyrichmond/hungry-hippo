import { combineReducers } from 'redux';

import { budgetsReducer, BudgetsState } from './budgets';
import { categoriesReducer, CategoriesState } from './categories';

export type AppState = {
  budgets: BudgetsState | null;
  categories: CategoriesState | null;
};

export const rootReducer = combineReducers<AppState>({
  budgets: budgetsReducer,
  categories: categoriesReducer,
});
