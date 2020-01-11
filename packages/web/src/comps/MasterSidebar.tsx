import React, { FC } from 'react';

import SingleEntrySummaryInput from './utils/SingleEntrySummaryInput';

const MasterSidebar: FC = () => {
  return (
    <div className="masterSidebar">
      <SingleEntrySummaryInput
        summaryType="Current Balance"
        label="Current Balance"
        nameOf="bank name"
      />
    </div>
  );
};

export default MasterSidebar;
