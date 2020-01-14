import { compareDesc } from 'date-fns';

import Budget from '../models/Budget';
import Transaction from '../models/Transaction';
import { BudgetsState } from '../store/budgets';
import { SelectedMonthState } from '../store/selectedMonth';
import store from '../store/store';
import { request } from './api-service';
import { getTotalSpent } from './transactions-service';

const dispatch = store.dispatch;

export const getBudgets = () =>
  request('budgets').then((res: any[]) => res.map<Budget>(x => ({ ...x, effectiveDate: new Date(x.effectiveDate) })));

export const addBudget = (item: Budget) =>
  request('budgets', {
    method: 'POST',
    body: item,
  })
    .then(item => {
      const updatedItem = { ...item, effectiveDate: new Date(item.effectiveDate) } as Budget;
      dispatch({ type: 'SET_BUDGET', item: updatedItem });
    })
    .catch(() => {});

export const updateBudget = (item: Budget) =>
  request(`budgets/${item._id}`, { method: 'PUT', body: item })
    .then(item => {
      const updatedItem = { ...item, effectiveDate: new Date(item.effectiveDate) } as Budget;
      dispatch({ type: 'SET_BUDGET', item: updatedItem });
    })
    .catch(() => {});
//should refactor to combine addBudget and updateBudget

export const createBudget = (categoryId: string, amount: number, month: SelectedMonthState, id?: string) => ({
  _id: id,
  effectiveDate: month.monthStart,
  categoryId,
  amount,
});

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

export const calculateRemainingBudget = (
  categoryId: string,
  budgets: BudgetsState | null | undefined,
  month: SelectedMonthState,
  transactionHistory: Transaction[] | null | undefined,
) => {
  if (!budgets) {
    return {};
  }

  const budget = getActiveBudget(categoryId, budgets!, month!);

  const budgetedAmount = budget && budget.amount;

  const remainingBudget = budgetedAmount ? budgetedAmount - (getTotalSpent(transactionHistory) || 0) : getTotalSpent(transactionHistory);
  return { budgetedAmount, remainingBudget };
};
