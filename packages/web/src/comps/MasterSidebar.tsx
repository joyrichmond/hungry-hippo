import React, { FC } from 'react';

import SingleEntrySummaryInput from './utils/SingleEntrySummaryInput';

const MasterSidebar: FC = () => {
  return (
    <div className="masterSidebar">
      <div className="selectInterval">
        <h3>Select Interval</h3>
        <select className="displayInput">
          <option value="Month" selected>
            Month
          </option>
          <option value="Bi-weekly">Bi-weekly</option>
          <option value="Quarter">Quarterly</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <SingleEntrySummaryInput
        summaryType="Current Balance"
        label="Current Balance"
        nameOf="bank name"
      />
    </div>
  );
};

export default MasterSidebar;
