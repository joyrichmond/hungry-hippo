import React, { useState, FC, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import config from '../../../app-config';
import { handleOnEnter } from '../../../services/handle-on-enter';

type Props = {
  addTransactionToHistory: any;
  setCanUserRecordTransaction: any;
};

const RecordTransaction: FC<Props> = ({
  addTransactionToHistory,
  setCanUserRecordTransaction,
}) => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [vendor, setVendor] = useState();

  const handleOnKeyEvent = (e: KeyboardEvent) => {
    if (e.keyCode === config.ENTER_KEY) {
      handleRecordTransaction();
    }
  };

  const handleRecordTransaction = () => {
    if (date) {
      addTransactionToHistory({ date, amount: parseInt(amount), vendor });
    } else {
      addTransactionToHistory({
        date: `${format(new Date(), 'MM-dd-yyyy')}`,
        amount: parseInt(amount),
        vendor,
      });
    }
    setCanUserRecordTransaction(false);
  };

  return (
    <div className="recordTransaction input-container">
      <input
        type="string"
        onChange={e => setDate(e.target.value)}
        value={date}
        placeholder={format(new Date(), 'E MM-d')}
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
        onKeyUp={e => handleOnEnter(e, handleRecordTransaction)}
      />
      <button onClick={handleRecordTransaction}>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </div>
  );
};

export default RecordTransaction;
