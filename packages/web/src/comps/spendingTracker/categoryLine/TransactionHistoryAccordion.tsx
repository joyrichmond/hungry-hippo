import React, { FC } from 'react';
import Transaction from '../../../../../api/src/models/Transaction';

type Props = {
  transactionHistory: Transaction[];
};

const TransactionHistoryAccordion: FC<Props> = ({ transactionHistory }) => {
  return (
    <div className="transactionHistory">
      {transactionHistory.map((transaction, i) => (
        <div key={i} className="transactionLine">
          <div>{transaction.date}</div>
          <div>${transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistoryAccordion;
