import { format } from 'date-fns';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useTransactions } from '../../hooks/useCollection';
import Category from '../../models/Category';
import Transaction from '../../models/Transaction';
import { calculateRemainingBudget } from '../../services/budget-service';
import { filterTransactions } from '../../services/transactions-service';
import { BudgetsState } from '../../store/budgets';
import { AppState } from '../../store/root';
import { SelectedMonthState } from '../../store/selectedMonth';
import { TransactionsState } from '../../store/transactions';

type Props = {
  transactions: TransactionsState | null | undefined;
  budgets: BudgetsState | null | undefined;
  category: Category | null | undefined;
  month: SelectedMonthState;
};

const TransactionHistory: FC<Props> = ({ transactions, budgets, category, month }) => {
  const transactionHistory = transactions && category && filterTransactions(transactions, month, category);

  const { budgetedAmount, remainingBudget } = calculateRemainingBudget(category!._id!, budgets, month, transactionHistory);

  return (
    <div className="transactionHistory">
      <div className="budgetInfo">
        <span>{remainingBudget || '0'}</span>
        <span>{budgetedAmount || 'Please add a budget'}</span>
      </div>
      {transactionHistory &&
        transactionHistory.map((transaction, i) => (
          <div key={i} className="transactionLine">
            <div>{format(transaction.date, 'MM/dd')}</div>
            <div>${transaction.amount}</div>
            <div>{transaction.vendor}</div>
          </div>
        ))}
    </div>
  );
};

export default TransactionHistory;
