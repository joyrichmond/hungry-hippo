import React, { FC } from 'react';

type Props = {
  transactionHistory: { date: string; amount: number }[];
};

const SpendingHistoryAccordion: FC<Props> = ({ transactionHistory }) => {
  return (
    <div>
      {transactionHistory.map((transaction, i) => (
        <div key={i}>
          <div>{transaction.date}</div>
          <div>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default SpendingHistoryAccordion;
