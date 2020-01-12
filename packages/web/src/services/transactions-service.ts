import Category from '../models/Category';
import Transaction from '../models/Transaction';
import { SelectedMonthState } from '../store/selectedMonth';
import { TransactionsState } from '../store/transactions';
import { request } from './api-service';

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
  selectedMonth: SelectedMonthState,
  category: Category,
) => {
  const { monthStart, monthEnd } = selectedMonth;
  const filtered =
    transactions &&
    Object.values(transactions).filter(
      transaction =>
        category._id === transaction.categoryId &&
        monthStart <= transaction.date &&
        transaction.date <= monthEnd,
    );
  return filtered;
};
