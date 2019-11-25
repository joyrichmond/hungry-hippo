import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTotalSpent } from '../../services/get-total-spent';

import TransactionHistoryAccordion from './categoryLine/TransactionHistoryAccordion';
import RecordTransaction from './categoryLine/RecordTransaction';

type Props = {
  category: string;
  budgetedAmount: number;
  transactionHistory: { date: string; amount: number }[];
  addTransactionToHistory: any;
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
  addTransactionToHistory,
}) => {
  const [isTransactionHistoryVisible, setIsTransactionVisible] = useState(
    false,
  );
  const [canUserRecordTransaction, setCanUserRecordTransaction] = useState(
    false,
  );

  const handleUserCanAddTransaction = () => {
    setCanUserRecordTransaction(!canUserRecordTransaction);
  };

  const handleViewHistory = () => {
    setIsTransactionVisible(!isTransactionHistoryVisible);
  };

  return (
    <div className="flex-v flex-centered-v">
      <div className="categoryLine" onClick={handleUserCanAddTransaction}>
        <span className="categoryName">{category}</span>
        <div className="budgetInfo">
          <span>{budgetedAmount - getTotalSpent(transactionHistory)}</span>
          <span>of</span>
          <span>{budgetedAmount} remaining</span>
        </div>
        <button type="button" onClick={handleViewHistory}>
          <FontAwesomeIcon icon="chevron-down" />
        </button>
      </div>
      {canUserRecordTransaction && (
        <RecordTransaction addTransactionToHistory={addTransactionToHistory} />
      )}
      {isTransactionHistoryVisible && (
        <TransactionHistoryAccordion transactionHistory={transactionHistory} />
      )}
    </div>
  );
};

export default CategoryLine;
