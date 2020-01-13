import React, { FC } from 'react';

type Props = {
  summaryType: string;
  nameOf: string;
  setName: any;
  setAmount: any;
  setIsOpen: any;
  amount: string | null;
  name: string | null;
};

const SingleEntryModal: FC<Props> = ({ summaryType, nameOf, setName, setAmount, setIsOpen, amount, name }) => {
  return (
    <form className="modal" onSubmit={e => setIsOpen(false)}>
      <h3>{summaryType}</h3>
      <input type="text" onChange={e => setName(e.target.value)} placeholder={nameOf} value={name!} />
      <input type="string" onChange={e => setAmount(e.target.value)} placeholder="amount" value={amount || ''} />
      <button type="submit">Update</button>
    </form>
  );
};

export default SingleEntryModal;
