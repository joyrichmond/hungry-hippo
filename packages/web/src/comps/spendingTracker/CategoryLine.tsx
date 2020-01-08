import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Category from '../../models/Category';
import Transaction from '../../models/Transaction';
import LineItemBudget from './LineItemBudget';
import RecordTransaction from './RecordTransaction';
import TransactionHistoryAccordion from './TransactionHistory';

type Props = {
  category: Category;
  budgetedAmount?: number | undefined;
  transactionHistory?: Transaction[] | null | undefined;
  setBudget: (amount: number, categoryId: string) => void;
  setTransaction: (transaction: Omit<Transaction, '_id'>) => void;
};

const CategoryLine: FC<Props> = ({
  category,
  budgetedAmount,
  transactionHistory,
  setBudget,
  setTransaction,
}) => {
  const [isTransactionHistoryVisible, setIsTransactionVisible] = useState(
    false,
  );
  const [canUserRecordTransaction, setCanUserRecordTransaction] = useState(
    false,
  );

  return (
    <div className="flex-v flex-centered-v">
      <div className="categoryLine">
        <div
          className="categoryName"
          onClick={() => setCanUserRecordTransaction(!canUserRecordTransaction)}
        >
          {category.name}
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </div>
        <LineItemBudget
          budgetedAmount={budgetedAmount}
          setBudget={setBudget}
          transactionHistory={transactionHistory}
          categoryId={category._id as string}
        />
        <button
          type="button"
          onClick={() => setIsTransactionVisible(!isTransactionHistoryVisible)}
        >
          <FontAwesomeIcon icon="chevron-down" />
        </button>
      </div>
      {canUserRecordTransaction && (
        <RecordTransaction
          setCanUserRecordTransaction={setCanUserRecordTransaction}
          categoryId={category._id as string}
          setTransaction={setTransaction}
        />
      )}
      {isTransactionHistoryVisible && (
        <TransactionHistoryAccordion transactionHistory={transactionHistory} />
      )}
    </div>
  );
};

export default CategoryLine;
