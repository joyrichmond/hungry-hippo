import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Category from '../../models/Category';
import Transaction from '../../models/Transaction';
import LineItemBudget from './LineItemBudget';
import RecordTransaction from './RecordTransaction';
import TransactionHistoryAccordion from './TransactionHistoryAccordion';

type Props = {
  category: Category;
  budgetedAmount?: number | undefined;
  transactionHistory?: Transaction[];
  setBudget: (amount: number, categoryId: any) => Promise<any>;
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
  setBudget,
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
          {category.name}
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </div>
        <LineItemBudget
          budgetedAmount={budgetedAmount}
          setBudget={setBudget}
          transactionHistory={transactionHistory}
          categoryId={category._id as string}
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
