import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  summaryType: string;
  setName: any;
  setAmount: any;
  amount: string | null;
  nameByUser: string;
};

const SummaryCardModal: FC<Props> = ({ isOpen, setIsOpen, summaryType, setName, setAmount, amount, nameByUser }) => {
  return (
    <>
      <form className="summaryModal" onSubmit={e => setIsOpen(false)}>
        <button onClick={e => setIsOpen(false)}>
          <FontAwesomeIcon icon={['fas', 'times']} />
        </button>
        <div className="summaryForm">
          <h3>{summaryType}</h3>
          <input type="text" onChange={e => setName(e.target.value)} placeholder={nameByUser} value={nameByUser} />
          <input type="string" onChange={e => setAmount(e.target.value)} placeholder="amount" value={amount || ''} />
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
        </button>
      </form>
    </>
  );
};

export default SummaryCardModal;
