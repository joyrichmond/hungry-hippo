import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
  addTransactionToHistory: any;
};

type TransactionInfo = {
  date: string;
  amount: number;
  vendor: string;
};

const RecordTransaction: FC<Props> = ({ addTransactionToHistory }) => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [vendor, setVendor] = useState();
  let transactionInfo = { date, amount, vendor };

  const handleRecordTransaction = () => {
    addTransactionToHistory(transactionInfo);
    setDate(undefined);
    setAmount(undefined);
    setVendor(undefined);
  };

  return (
    <div className="recordTransaction">
      <input
        type="number"
        placeholder="date (press enter to use today's date)"
        onChange={e => setDate(e.target.value)}
        value={date}
      />
      <input
        type="number"
        placeholder="amount"
        onChange={e => setAmount(e.target.value)}
        value={transactionInfo.amount}
      />
      <input
        type="text"
        placeholder="vendor"
        onChange={e => setVendor(e.target.value)}
        value={transactionInfo.vendor}
      />
      <button onClick={handleRecordTransaction}>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </div>
  );
};

export default RecordTransaction;
