import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpendingHistoryAccordion from './categoryLine/SpendingHistoryAccordion';

type Props = {
  category: string;
  budgetedAmount: number;
  history: { date: any; amount: number }[];
};

const CategoryLine: FC<Props> = ({ category, budgetedAmount, history }) => {
  const [isTransactionHistoryVisible, setIsTransactionVisible] = useState(
    false,
  );

  const handleClick = () => {
    setIsTransactionVisible(true);
  };

  return (
    <div className="categoryLine">
      <span>{category}</span>
      <input type="text" />
      <div className="budget-info">
        <span>totalSpent</span>
        <span>of</span>
        <span>{budgetedAmount}</span>
      </div>
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon="chevron-down" />
      </button>
      {isTransactionHistoryVisible && (
        <SpendingHistoryAccordion history={history} />
      )}
    </div>
  );
};

export default CategoryLine;
