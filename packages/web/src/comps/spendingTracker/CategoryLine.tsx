import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TransactionHistoryAccordion from './categoryLine/TransactionHistoryAccordion';

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
    setIsTransactionVisible(!isTransactionHistoryVisible);
  };

  return (
    <div className="flex-v flex-centered-v">
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
      </div>
      {isTransactionHistoryVisible && (
        <TransactionHistoryAccordion transactionHistory={transactionHistory} />
      )}
    </div>
  );
};

export default CategoryLine;
