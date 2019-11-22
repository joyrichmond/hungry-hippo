import React, { FC } from 'react';

type Props = {
  history: { date: any; amount: number }[];
};

const SpendingHistoryAccordion: FC<Props> = ({ history }) => {
  return (
    <div>
      {history.map((transaction, i) => (
        <div key={i}>
          <div>{transaction.date}</div>
          <div>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default SpendingHistoryAccordion;
