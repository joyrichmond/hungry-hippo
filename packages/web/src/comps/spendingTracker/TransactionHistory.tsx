import { format, isSameMonth } from 'date-fns';
import React, { FC, FormEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Category from '../../models/Category';
import { addBudget, calculateRemainingBudget, createBudget, getActiveBudget, updateBudget } from '../../services/budget-service';
import { filterTransactions } from '../../services/transactions-service';
import { BudgetsState } from '../../store/budgets';
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
      <div className="transactionHistoryHeader">
        <h3>Transaction History</h3>
        <span>{category!.name}</span>
      </div>
      <div className="budgetInfo">
        <div>
          <span className="importantAmount">${remainingBudget || '0'}</span>
          <span>(Remaining Budget)</span>
        </div>
        <button onClick={e => setCanUserChangeBudget(!canUserChangeBudget)}>
          <span>(Budgeted Amount)</span>
          <span className="importantAmount">${budgetedAmount || 'Please set a budget amount'}</span>
        </button>
        {canUserChangeBudget && (
          <form className="submitChangeBudget" onSubmit={e => submitChangeBudget(e)}>
            <label>new budget</label>
            <input onChange={e => setAmount(Number(e.target.value))} value={amount} placeholder="Please set a budget amount" />
            <button type="submit">
              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            </button>
          </form>
        )}
      </div>
      <div className="transactionRecord">
        <h4>Transactions</h4>
        {transactionHistory &&
          transactionHistory.map((transaction, i) => (
            <div key={i} className="transactionLine">
              <span>{format(transaction.date, 'MM/dd')}</span>
              <span>${transaction.amount}</span>
              <span>{transaction.vendor}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
