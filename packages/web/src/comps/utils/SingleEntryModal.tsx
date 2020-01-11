import React, { FC } from 'react';

type Props = {
  isOpen: boolean;
  label: string;
  summaryType: string;
  setName: any;
  setAmount: any;
  amount: string | null;
  name: string | null;
};

const SingleEntryModal: FC<Props> = ({
  isOpen,
  label,
  summaryType,
  setName,
  setAmount,
  amount,
  name,
}) => {
  return (
    isOpen && (
      <form className="modal">
        <h3>{label}</h3>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder={summaryType}
          value={name}
        />
        <input
          type="string"
          onChange={e => setAmount(e.target.value)}
          placeholder="amount"
          value={amount || ''}
        />
      </form>
    )
  );
};

export default SingleEntryModal;
