import { compareDesc } from 'date-fns';

import Budget from '../models/Budget';
import Transaction from '../models/Transaction';
import { BudgetsState } from '../store/budgets';
import { SelectedMonthState } from '../store/selectedMonth';
import { request } from './api-service';
import { getTotalSpent } from './transactions-service';

export const getBudgets = () =>
  request('budgets').then((res: any[]) => res.map<Budget>(x => ({ ...x, effectiveDate: new Date(x.effectiveDate) })));

export const addBudget = (item: Budget) =>
  request('budgets', {
    method: 'POST',
    body: item,
  }).then(x => ({ ...x, effectiveDate: new Date(x.effectiveDate) } as Budget));

export const updateBudget = (item: Budget) => request('budgets', { method: 'PUT', body: item }).then(x => ({ ...x, effectiveDate: new Date(x.effectiveDate) }));

export const getActiveBudget = (categoryId: string, budgets: BudgetsState, month: SelectedMonthState) => {
  const sortedBudgets =
    budgets &&
    Object.values(budgets)
      .filter(budget => categoryId === (budget.categoryId as string) && budget.effectiveDate <= month.monthEnd)
      .sort((a, b) => compareDesc(a.effectiveDate, b.effectiveDate));

  if (sortedBudgets && sortedBudgets.length) {
    return sortedBudgets[0];
  }
  return undefined;
};

export const calculateRemainingBudget = (categoryId: string, budgets: BudgetsState, month: SelectedMonthState, transactionHistory: Transaction[] | null | undefined) => {
  const budget = getActiveBudget(categoryId, budgets!, month!);

  const budgetedAmount = budget && budget.amount;

  const remainingBudget = budgetedAmount ? budgetedAmount - (getTotalSpent(transactionHistory) || 0) : '';
  return { budgetedAmount, remainingBudget };
};
