import React, { FC, useState } from 'react';

import SingleEntryModal from './SingleEntryModal';

type Props = {
  label: string;
  summaryType: string;
};

const SingleEntrySummaryInput: FC<Props> = ({ label, summaryType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(summaryType);
  const [amount, setAmount] = useState('null');

  return (
    <div>
      <button onClick={e => setIsModalOpen(!isModalOpen)}>{amount}</button>
      <SingleEntryModal
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

export default SingleEntrySummaryInput;
