import Category from '../models/Category';
import Transaction from '../models/Transaction';
import { TransactionsState } from '../store/transactions';
import { request } from './api-service';
import { budgetMonthRange } from './time-service';

export const getTransactions = () =>
  request('transactions').then((res: any[]) =>
    res.map<Transaction>(x => ({ ...x, date: new Date(x.date) })),
  );

export const addTransaction = (item: Transaction) =>
  request('transactions', {
    method: 'POST',
    body: item,
  }).then(x => ({ ...x, date: new Date(x.date) } as Transaction));

export const filterTransactions = (
  transactions: TransactionsState | null,
  budgetStart: Date,
  budgetEnd: Date,
  category: Category,
) => {
  const filtered =
    transactions &&
    Object.values(transactions).filter(
      transaction =>
        category._id === transaction.categoryId &&
        budgetStart <= transaction.date &&
        transaction.date <= budgetEnd,
    );
  console.log('getTransactions', {
    budgetMonthRange,
    category,
    transactions,
    filtered,
  });
  return filtered;
};
