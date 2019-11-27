import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTotalSpent } from '../../services/get-total-spent';

import TransactionHistoryAccordion from './categoryLine/TransactionHistoryAccordion';
import RecordTransaction from './categoryLine/RecordTransaction';
import Transaction from '../../../../api/src/models/Transaction';

type Props = {
  category: string;
  budgetedAmount?: number;
  transactionHistory: Transaction[];
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
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
      <div className="categoryLine">
        <div className="categoryName" onClick={handleUserCanAddTransaction}>
          {category}
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </div>
        {budgetedAmount ? (
          <div className="budgetInfo">
            <span>{budgetedAmount - getTotalSpent(transactionHistory)}</span>
            <span>of</span>
            <span>{budgetedAmount} remaining</span>
          </div>
        ) : (
          <div>Please create a budget</div>
        )}
        <button type="button" onClick={handleViewHistory}>
          <FontAwesomeIcon icon="chevron-down" />
        </button>
      </div>
      {canUserRecordTransaction && (
        <RecordTransaction
          setCanUserRecordTransaction={setCanUserRecordTransaction}
        />
      )}
      {isTransactionHistoryVisible && (
        <TransactionHistoryAccordion transactionHistory={transactionHistory} />
      )}
    </div>
  );
};

export default CategoryLine;
