import React, { FC } from 'react';

import MultiEntrySummaryInput from './utils/MultiEntrySummaryInput';
import SingleEntrySummaryInput from './utils/SingleEntrySummaryInput';

const MasterSidebar: FC = () => {
  return (
    <div className="masterSidebar">
      <div className="selectInterval">
        <h3>Select Interval</h3>
        <select className="displayInput">
          <option defaultValue="Month">Month</option>
          <option value="Bi-weekly">Bi-weekly</option>
          <option value="Quarter">Quarterly</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <MultiEntrySummaryInput summaryType="Current Balance" nameByGeneric="bank name" />
      <MultiEntrySummaryInput summaryType="Projected Income" nameByGeneric="income source" />
      <MultiEntrySummaryInput summaryType="Card Balance" nameByGeneric="card name" />
      <MultiEntrySummaryInput summaryType="Dedicated Expense" nameByGeneric="expense name" />
      <MultiEntrySummaryInput summaryType="Investments" nameByGeneric="investment name" />
      <MultiEntrySummaryInput summaryType="Savings" nameByGeneric="bank name" />
    </div>
  );
};

export default MasterSidebar;
