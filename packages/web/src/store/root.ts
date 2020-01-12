import { combineReducers } from 'redux';

import Auth from '../models/Auth';
import Category from '../models/Category';
import { authReducer } from './auth';
import { budgetsReducer, BudgetsState } from './budgets';
import { categoriesReducer, CategoriesState } from './categories';
import { selectedCategoryReducer } from './selectedCategory';
import { selectedMonthReducer, SelectedMonthState } from './selectedMonth';
import { transactionsReducer, TransactionsState } from './transactions';

export type AppState = {
  auth: Auth | null;
  budgets: BudgetsState | null;
  categories: CategoriesState | null;
  selectedCategory: Category | null;
  selectedMonth: SelectedMonthState;
  transactions: TransactionsState | null;
};

export const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  budgets: budgetsReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  selectedMonth: selectedMonthReducer,
  transactions: transactionsReducer,
});
