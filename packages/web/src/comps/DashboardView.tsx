import React, { Dispatch, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Category from '../models/Category';
import Transaction from '../models/Transaction';
import { addTransaction } from '../services/transactions-service';
import { BudgetsState } from '../store/budgets';
import { CategoriesState } from '../store/categories';
import { AppState } from '../store/root';
import { SelectedMonthState } from '../store/selectedMonth';
import { TransactionsState } from '../store/transactions';
import RecordTransaction from './spendingTracker/RecordTransaction';
import TransactionHistory from './spendingTracker/TransactionHistory';

type Props = {
  categories?: CategoriesState | null;
  budgets?: BudgetsState | null;
  transactions?: TransactionsState | null | undefined;
  dispatch: Dispatch<any>;
  selectedMonth: SelectedMonthState;
  selectedCategory: Category | null;
};

const DashboardView: FC<Props> = ({ categories, budgets, transactions, dispatch, selectedMonth, selectedCategory }) => {
  const setTransaction = (transaction: Omit<Transaction, '_id'>) => {
    addTransaction(transaction).then(item => dispatch({ type: 'ADD_TRANSACTION', item }));
  };

  return (
    <div className="dashboardView">
      <RecordTransaction category={selectedCategory || undefined} setTransaction={setTransaction} />
      {selectedCategory && <TransactionHistory transactions={transactions} budgets={budgets} category={selectedCategory || undefined} month={selectedMonth} />}
    </div>
  );
};

export default DashboardView;
