import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Budget from '../../../api/src/models/Budget';
import Category from '../../../api/src/models/Category';
import Transaction from '../../../api/src/models/Transaction';
import { request } from '../services/api-service';
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
    //.catch(err => toast.error(err.message));
  }, [collection, dispatch, fetchFn, type]);

  return collection;
};

// export const useBudgets = () =>
//   useCollection<Budget>(
//     'SET_BUDGETS',
//     state => state.budgets,
//     () => request('budgets'),
//   );

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
