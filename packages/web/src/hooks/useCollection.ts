import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Budget from '../models/Budget';
import Category from '../models/Category';
import { request } from '../services/api-service';
import { getBudgets } from '../services/budget-service';
import { AppState } from '../store/root';

const useCollection = <T>(
  type: string,
  selectorFn: (state: AppState) => { [key: string]: T } | null,
  fetchFn: () => Promise<T[]>,
) => {
  const dispatch = useDispatch();
  const collection = useSelector(selectorFn);

  useEffect(() => {
    if (collection) {
      return;
    }

    fetchFn().then(res => dispatch({ type, collection: res }));
  }, [collection, dispatch, fetchFn, type]);

  return collection;
};

export const useBudgets = () =>
  useCollection<Budget>(
    'SET_BUDGETS',
    state => state.budgets,
    () => getBudgets(),
  );

export const useCategories = () =>
  useCollection<Category>(
    'SET_CATEGORIES',
    state => state.categories,
    () => request('categories'),
  );

// export const useTransactions = () =>
//   useCollection<Transaction>(
//     'SET_TRANSACTIONS',
//     state => state.transactions,
//     () => request('transactions'),
//   );
