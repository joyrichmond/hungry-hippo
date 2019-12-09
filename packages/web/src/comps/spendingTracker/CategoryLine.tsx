import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Transaction from '../../../../api/src/models/Transaction';
import { getTotalSpent } from '../../services/get-total-spent';
import LineItemBudget from './LineItemBudget';
import RecordTransaction from './RecordTransaction';
import TransactionHistoryAccordion from './TransactionHistoryAccordion';

type Props = {
  category: string;
  budgetedAmount?: number;
  transactionHistory: Transaction[];
  addNewBudget: (amount: number) => Promise<any>;
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
  addNewBudget,
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
        <LineItemBudget
          budgetedAmount={budgetedAmount}
          addNewBudget={addNewBudget}
          transactionHistory={transactionHistory}
        />
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
