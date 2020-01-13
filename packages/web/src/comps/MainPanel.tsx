import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useBudgets, useCategories, useTransactions } from '../hooks/useCollection';
import { AppState } from '../store/root';
import DashboardView from './DashboardView';
import Gateway from './Gateway';
import MasterSidebar from './MasterSidebar';
import SpendingTracker from './SpendingTracker';

const MainPanel: FC = () => {
  const auth = useSelector(({ auth }: AppState) => auth);
  const categories = useCategories();
  const transactions = useTransactions();
  const budgets = useBudgets();
  const selectedMonth = useSelector((state: AppState) => state.selectedMonth);
  const selectedCategory = useSelector((state: AppState) => state.selectedCategory);
  const dispatch = useDispatch();

  if (auth) {
    return (
      <>
        <div className="masterSidebar">
          <MasterSidebar />
        </div>
        <div className="dashboardView">
          <DashboardView
            categories={categories}
            budgets={budgets}
            transactions={transactions}
            dispatch={dispatch}
            selectedMonth={selectedMonth}
            selectedCategory={selectedCategory}
          />
        </div>
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
  }

  return <Gateway />;
};

export default MainPanel;
