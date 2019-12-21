import { format } from 'date-fns';
import React, { FC } from 'react';

import Transaction from '../../models/Transaction';

type Props = {
  transactionHistory: Transaction[] | null | undefined;
};

const TransactionHistoryAccordion: FC<Props> = ({ transactionHistory }) => {
  return (
    <div className="transactionHistory">
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

export default TransactionHistoryAccordion;
