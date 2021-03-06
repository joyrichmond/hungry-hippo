import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useBudgets, useCategories, useTransactions } from '../hooks/useCollection';
import { AppState } from '../store/root';
import DashboardView from './DashboardView';
import Header from './Header';
import MasterSidebar from './MasterSidebar';
import SpendingTracker from './SpendingTracker';

const MainPanel: FC = () => {
  const categories = useCategories();
  const transactions = useTransactions();
  const budgets = useBudgets();
  const auth = useSelector(({ auth }: AppState) => auth);

  const selectedMonth = useSelector((state: AppState) => state.selectedMonth);
  const selectedCategory = useSelector((state: AppState) => state.selectedCategory);
  const dispatch = useDispatch();

  return (
    <>
      <Header dispatch={dispatch} auth={auth} />
      <MasterSidebar />
      <DashboardView categories={categories} budgets={budgets} transactions={transactions} dispatch={dispatch} selectedMonth={selectedMonth} selectedCategory={selectedCategory} />
      <div className="spendingSidebar">
        <SpendingTracker
          categories={categories}
          budgets={budgets}
          transactions={transactions}
          dispatch={dispatch}
          selectedMonth={selectedMonth}
          selectedCategory={selectedCategory}
        />
      </div>
    </>
  );
};

export default MainPanel;
