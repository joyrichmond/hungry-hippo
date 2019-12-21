import { format } from 'date-fns';
import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Transaction from '../../models/Transaction';

type Props = {
  setCanUserRecordTransaction: any;
  categoryId: string;
  setTransaction: (transaction: Omit<Transaction, '_id'>) => void;
};

const RecordTransaction: FC<Props> = ({
  setCanUserRecordTransaction,
  categoryId,
  setTransaction,
}) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('');

  const createNewTransaction = () => {
    if (date) {
      return {
        date: new Date(`${date}`),
        amount: parseInt(amount),
        vendor,
        categoryId,
      };
    } else {
      return {
        date: new Date(),
        amount: parseInt(amount),
        vendor,
        categoryId,
      };
    }
  };

  const handleRecordTransaction = () => {
    const newTransaction = createNewTransaction();
    setCanUserRecordTransaction(false);
    setTransaction(newTransaction);
  };

  return (
    <form
      className="recordTransaction input-container"
      onSubmit={handleRecordTransaction}
    >
      <input
        type="text"
        onChange={e => setDate(e.target.value)}
        value={date}
        placeholder={format(new Date(), 'MM-dd-yyyy')}
        autoFocus
      />
      <input
        type="number"
        placeholder="amount"
        onChange={e => setAmount(e.target.value)}
        value={amount}
      />
      <input
        type="text"
        placeholder="vendor"
        onChange={e => setVendor(e.target.value)}
        value={vendor}
      />
      <button onClick={handleRecordTransaction}>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </form>
  );
};

export default RecordTransaction;
