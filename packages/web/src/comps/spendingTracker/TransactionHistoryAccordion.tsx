import React, { FC } from 'react';

import Transaction from '../../models/Transaction';

type Props = {
  transactionHistory: Transaction[] | undefined;
};

const TransactionHistoryAccordion: FC<Props> = ({ transactionHistory }) => {
  return (
    <div className="transactionHistory">
      {transactionHistory &&
        transactionHistory.map((transaction, i) => (
          <div key={i} className="transactionLine">
            <div>{transaction.date}</div>
            <div>${transaction.amount}</div>
          </div>
        ))}
    </div>
  );
};

export default TransactionHistoryAccordion;
