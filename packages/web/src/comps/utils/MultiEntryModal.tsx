import React, { FC } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  summaryType: string;
  setName: any;
  setAmount: any;
  amount: string | null;
  nameByUser: string;
};

const MultiEntryModal: FC<Props> = ({ isOpen, setIsOpen, summaryType, setName, setAmount, amount, nameByUser }) => {
  return (
    <>
      {isOpen && (
        <form className="modal" onSubmit={e => setIsOpen(false)}>
          <h3>{summaryType}</h3>
          <input type="text" onChange={e => setName(e.target.value)} placeholder={nameByUser} value={nameByUser} />
          <input type="string" onChange={e => setAmount(e.target.value)} placeholder="amount" value={amount || ''} />
          <button type="submit">Update</button>
        </form>
      )}
    </>
  );
};

export default MultiEntryModal;
