import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpendingHistoryAccordion from './categoryLine/SpendingHistoryAccordion';

type Props = {
  category: string;
  budgetedAmount: number;
  transactionHistory: { date: string; amount: number }[];
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
}) => {
  const [isTransactionHistoryVisible, setIsTransactionVisible] = useState(
    false,
  );

  const handleClick = () => {
    setIsTransactionVisible(true);
  };

  return (
    <div className="categoryLine">
      <span className="categoryName">{category}</span>
      <input type="text" />
      <div className="budgetInfo">
        <span>totalSpent</span>
        <span>of</span>
        <span>{budgetedAmount}</span>
      </div>
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon="chevron-down" />
      </button>
      {isTransactionHistoryVisible && (
        <SpendingHistoryAccordion transactionHistory={transactionHistory} />
      )}
    </div>
  );
};

export default CategoryLine;
