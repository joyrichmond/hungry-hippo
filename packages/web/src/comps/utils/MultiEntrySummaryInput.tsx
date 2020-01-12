import React, { FC, useState } from 'react';

import MultiEntryModal from './MultiEntryModal';

type Props = {
  label: string;
  summaryType: string;
};

const MultiEntrySummaryInput: FC<Props> = ({ label, summaryType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(summaryType);
  const [amount, setAmount] = useState('null');

  return (
    <div>
      <button onClick={e => setIsModalOpen(!isModalOpen)}>{amount}</button>
      <MultiEntryModal
        isOpen={isModalOpen}
        label={label}
        summaryType={summaryType}
        setName={setName}
        setAmount={setAmount}
        amount={amount}
        name={name}
      />
    </div>
  );
};

export default MultiEntrySummaryInput;
