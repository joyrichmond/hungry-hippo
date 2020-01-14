import { format } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Category from '../../models/Category';
import Transaction from '../../models/Transaction';
import { AppState } from '../../store/root';

type Props = {
  //setCanUserRecordTransaction: any;
  category?: Category;
  setTransaction: (transaction: Omit<Transaction, '_id'>) => void;
};

const RecordTransaction: FC<Props> = ({
  //setCanUserRecordTransaction,
  category,
  setTransaction,
}) => {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => setCategoryName((category && category!.name) || ''), [category]);

  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('');

  const createNewTransaction = (): Transaction => {
    return {
      date: date ? new Date(`${date}`) : new Date(),
      amount: parseInt(amount),
      vendor,
      categoryId: category!._id as string,
    };
  };

  const handleRecordTransaction = () => {
    const newTransaction = createNewTransaction();
    //setCanUserRecordTransaction(false);
    setTransaction(newTransaction);
    setDate('');
    setAmount('');
    setVendor('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleRecordTransaction();
    }
  };

  return (
    <div className="recordTransaction">
      <div className="form-container">
        <h3>Record Transaction</h3>
        <form className="input-container" onSubmit={handleRecordTransaction}>
          <input type="text" onChange={e => setDate(e.target.value)} value={date} placeholder={format(new Date(), 'MM-dd-yyyy')} autoFocus />
          <input type="text" onChange={e => setCategoryName(e.target.value)} value={categoryName} placeholder="category" required />
          <input type="number" placeholder="amount" onChange={e => setAmount(e.target.value)} value={amount} required />
          <input type="text" placeholder="vendor" onChange={e => setVendor(e.target.value)} value={vendor} onKeyDown={e => handleKeyDown(e)} />
        </form>
      </div>
      <button type="submit">
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </button>
    </div>
  );
};

export default RecordTransaction;
