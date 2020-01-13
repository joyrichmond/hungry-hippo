import { format, isSameMonth } from 'date-fns';
import React, { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useTransactions } from '../../hooks/useCollection';
import Budget from '../../models/Budget';
import Category from '../../models/Category';
import Transaction from '../../models/Transaction';
import { addBudget, calculateRemainingBudget, createBudget, getActiveBudget, updateBudget } from '../../services/budget-service';
import { filterTransactions } from '../../services/transactions-service';
import { BudgetsState } from '../../store/budgets';
import { AppState } from '../../store/root';
import { SelectedMonthState } from '../../store/selectedMonth';
import { TransactionsState } from '../../store/transactions';
import SingleEntrySummaryInput from '../utils/SingleEntrySummaryInput';

type Props = {
  transactions: TransactionsState | null | undefined;
  budgets: BudgetsState | null | undefined;
  category: Category | null | undefined;
  month: SelectedMonthState;
};

const TransactionHistory: FC<Props> = ({ transactions, budgets, category, month }) => {
  const transactionHistory = transactions && category && filterTransactions(transactions, month, category);

  const { budgetedAmount, remainingBudget } = calculateRemainingBudget(category!._id!, budgets, month, transactionHistory);

  const activeBudget = getActiveBudget(category!._id!, budgets!, month);

  const [canUserChangeBudget, setCanUserChangeBudget] = useState(false);
  const [amount, setAmount] = useState(budgetedAmount || 0);

  const submitChangeBudget = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBudget = createBudget(category!._id!, amount, month, activeBudget?._id);

    if (activeBudget && isSameMonth(month.monthStart, activeBudget.effectiveDate)) {
      await updateBudget(newBudget);
    } else {
      await addBudget(newBudget);
    }

    setCanUserChangeBudget(false);
  };

  return (
    <div className="transactionHistory">
      <div className="budgetInfo">
        <span>{remainingBudget || '0'}</span>
        <button onClick={e => setCanUserChangeBudget(!canUserChangeBudget)}>{budgetedAmount || 'Please set a budget amount'}</button>
        {canUserChangeBudget && (
          <form className="submitChangeBudget" onSubmit={e => submitChangeBudget(e)}>
            <input onChange={e => setAmount(Number(e.target.value))} value={amount} placeholder="Please set a budget amount" />
            <button type="submit">Update</button>
          </form>
        )}
        {/* <SingleEntrySummaryInput summaryType={''} label={'New Budget'} existingAmount={budgetedAmount} onModalSubmit={() => {}} /> */}
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
