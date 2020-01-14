import React, { FC } from 'react';

import SingleEntrySummaryInput from './utils/SingleEntrySummaryInput';
import SummaryCard from './utils/SummaryCard';

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
      <SummaryCard summaryType="Current Balance" nameByGeneric="bank name" />
      <SummaryCard summaryType="Projected Income" nameByGeneric="income source" />
      <SummaryCard summaryType="Card Balance" nameByGeneric="card name" />
      <SummaryCard summaryType="Dedicated Expenses" nameByGeneric="expense name" />
      <SummaryCard summaryType="Investments" nameByGeneric="investment name" />
      <SummaryCard summaryType="Savings" nameByGeneric="bank name" />
    </div>
  );
};

export default MasterSidebar;
