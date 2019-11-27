import React, { useState, FC, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { handleOnEnter } from '../../../services/handle-on-enter';
import { create } from 'istanbul-reports';

type Props = {
  setCanUserRecordTransaction: any;
};

const RecordTransaction: FC<Props> = ({ setCanUserRecordTransaction }) => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [vendor, setVendor] = useState();

  const createNewTransaction = () => {
    if (date) {
      return {
        date: format(new Date(`${date}`), 'MM-dd-yyyy'),
        amount: parseInt(amount),
        vendor,
      };
    } else {
      return {
        date: `${format(new Date(), 'MM-dd-yyyy')}`,
        amount: parseInt(amount),
        vendor,
      };
    }
  };

  const handleRecordTransaction = () => {
    createNewTransaction();
    setCanUserRecordTransaction(false);
  };

  return (
    <div className="recordTransaction input-container">
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
        onKeyUp={e => handleOnEnter(e, handleRecordTransaction)}
      />
      <button onClick={handleRecordTransaction}>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </div>
  );
};

export default RecordTransaction;
