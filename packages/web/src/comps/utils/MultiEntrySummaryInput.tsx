import React, { FC, useState } from 'react';

import MultiEntryModal from './MultiEntryModal';

type Props = {
  summaryType: string | null;
  nameByGeneric: string | null;
};

const MultiEntrySummaryInput: FC<Props> = ({ summaryType, nameByGeneric }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameByUser, setNameByUser] = useState(nameByGeneric || '');
  const [amount, setAmount] = useState('null');

  return (
    <div>
      <button className="flex-h flex-space-between" onClick={e => setIsModalOpen(!isModalOpen)}>
        <span>{summaryType}</span>
        <span>{amount}</span>
      </button>
      <MultiEntryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        summaryType={summaryType || ''}
        setName={setNameByUser}
        setAmount={setAmount}
        amount={amount}
        nameByUser={nameByUser}
      />
    </div>
  );
};

export default MultiEntrySummaryInput;
