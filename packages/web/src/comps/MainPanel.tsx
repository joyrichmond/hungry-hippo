import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../store/root';
import DashboardView from './DashboardView';
import Gateway from './Gateway';
import SpendingTracker from './SpendingTracker';

const MainPanel: FC = () => {
  const auth = useSelector(({ auth }: AppState) => auth);

  if (auth) {
    return (
      <>
        <div className="masterSidebar"></div>
        <div className="dashboardView">
          <DashboardView />
        </div>
        <div className="spendingSidebar">
          <SpendingTracker />
        </div>
      </>
    );
  }

  return <Gateway />;
};

export default MainPanel;
