import { format } from 'date-fns';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useTransactions } from '../../hooks/useCollection';
import Transaction from '../../models/Transaction';
import { filterTransactions } from '../../services/transactions-service';
import { AppState } from '../../store/root';

const TransactionHistory: FC = () => {
  const transactionHistory = transactions && category && filterTransactions(transactions, selectedMonth, category);

  return (
    <div className="transactionHistory">
      <div className="budgetInfo">
        <span></span>
        <span></span>
      </div>
      {transactionHistory &&
        transactionHistory.map((transaction, i) => (
          <div key={i} className="transactionLine">
            <div>{format(transaction.date, 'MM/dd')}</div>
            <div>${transaction.amount}</div>
            <div>{transaction.vendor}</div>
          </div>
        ))}
    </div>
  );
};

export default TransactionHistory;
