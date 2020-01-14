import React, { FC, useState } from 'react';

import SummaryCardModal from './SummaryCardModal';

type Props = {
  summaryType: string | null;
  nameByGeneric: string | null;
};

const SummaryCard: FC<Props> = ({ summaryType, nameByGeneric }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameByUser, setNameByUser] = useState(nameByGeneric || '');
  const [amount, setAmount] = useState('Please enter an amount');

  return (
    <div className="summaryCard" onClick={e => setIsModalOpen(true)}>
      <div className="summaryCardHeader">{summaryType}</div>
      <div className="summaryAmount">{amount}</div>
      {isModalOpen && (
        <SummaryCardModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          summaryType={summaryType || ''}
          setName={setNameByUser}
          setAmount={setAmount}
          amount={amount}
          nameByUser={nameByUser}
        />
      )}
    </div>
  );
};

export default SummaryCard;
