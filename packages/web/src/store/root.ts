import { combineReducers } from 'redux';

import { budgetsReducer, BudgetsState } from './budgets';
import { categoriesReducer, CategoriesState } from './categories';
import { selectedCategoryReducer } from './selectedCategory';
import { selectedMonthReducer, SelectedMonthState } from './selectedMonth';
import { transactionsReducer, TransactionsState } from './transactions';

export type AppState = {
  budgets: BudgetsState | null;
  categories: CategoriesState | null;
  transactions: TransactionsState | null;
  selectedMonth: SelectedMonthState;
  selectedCategory: string | null;
};

export const rootReducer = combineReducers<AppState>({
  budgets: budgetsReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
  selectedMonth: selectedMonthReducer,
  selectedCategory: selectedCategoryReducer,
});
