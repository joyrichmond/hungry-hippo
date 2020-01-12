import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useBudgets, useCategories, useTransactions } from '../hooks/useCollection';
import { AppState } from '../store/root';
import DashboardView from './DashboardView';
import Gateway from './Gateway';
import SpendingTracker from './SpendingTracker';

const MainPanel: FC = () => {
  const auth = useSelector(({ auth }: AppState) => auth);
  const categories = useCategories();
  const transactions = useTransactions();
  const budgets = useBudgets();

  if (auth) {
    return (
      <>
        <div className="masterSidebar"></div>
        <div className="dashboardView">
          <DashboardView categories={categories} budgets={budgets} transactions={transactions} />
        </div>
        <div className="spendingSidebar">
          <SpendingTracker categories={categories} budgets={budgets} transactions={transactions} />
        </div>
      </>
    );
  }

  return <Gateway />;
};

export default MainPanel;
