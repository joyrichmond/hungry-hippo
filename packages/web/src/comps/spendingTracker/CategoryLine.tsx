import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpendingHistoryAccordion from './categoryLine/SpendingHistoryAccordion';

type Props = {
  category: string;
  budgetedAmount: number;
};

const CategoryLine: FC<Props> = ({ category, budgetedAmount }) => {
  return (
    <div id="categoryLine">
      <span>{category}</span>
      <input type="text" />
      <span>totalSpent</span>
      <span>of</span>
      <span>{budgetedAmount}</span>
      <button type="button">
        <FontAwesomeIcon icon="chevron-down" />
      </button>
    </div>
  );
};

export default CategoryLine;
