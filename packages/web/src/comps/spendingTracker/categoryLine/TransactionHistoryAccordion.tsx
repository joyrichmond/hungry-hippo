import React, { FC } from 'react';

type Props = {
  transactionHistory: { date: string; amount: number }[];
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
