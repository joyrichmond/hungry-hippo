import React, { FC } from 'react';
import { useBudgets } from '../hooks/useCollection';
import { getYear, format } from 'date-fns';
import Budget from '../../../api/src/models/Budget';

export const getBudgetYears = (budgets: Budget[]) => {
  let yearsSet = new Set();
  budgets.map((budget: Budget) => yearsSet.add(getYear(budget.effectiveDate)));
  const budgetYears = Array.from(yearsSet);
  return budgetYears;
};
