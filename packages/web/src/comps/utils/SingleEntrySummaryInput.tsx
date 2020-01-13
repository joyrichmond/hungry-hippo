import React, { FC, useState } from 'react';

import SingleEntryModal from './SingleEntryModal';

type Props = {
  summaryType: string;
  nameOf: string;
};

const SingleEntrySummaryInput: FC<Props> = ({ summaryType, nameOf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(nameOf);
  const [amount, setAmount] = useState('Please enter amount');

  return (
    <div>
      <h3>{summaryType}</h3>
      <button onClick={e => setIsModalOpen(!isModalOpen)}>{amount}</button>
      {isModalOpen && <SingleEntryModal summaryType={summaryType} nameOf={nameOf} setName={setName} setAmount={setAmount} setIsOpen={setIsModalOpen} amount={amount} name={name} />}
    </div>
  );
};

export default SingleEntrySummaryInput;
