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
  const [transactionInfo, setTransactionInfo] = useState({});
  const handleRecordTransaction = () => {
    addTransactionToHistory(transactionInfo);
  };

  return (
    <div className="recordTransaction">
      <input
        type="text"
        placeholder="date (press enter to use today's date)"
        onChange={e =>
          setTransactionInfo({ ...transactionInfo, date: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="amount"
        onChange={e =>
          setTransactionInfo({ ...transactionInfo, amount: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="vendor"
        onChange={e =>
          setTransactionInfo({ ...transactionInfo, vendor: e.target.value })
        }
      />
      <button onClick={handleRecordTransaction}>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </div>
  );
};

export default RecordTransaction;
