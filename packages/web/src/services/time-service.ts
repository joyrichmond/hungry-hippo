import { endOfMonth, startOfMonth } from 'date-fns';

export const createBudgetMonthRange = (newDate: Date) => {
  return {
    monthStart: startOfMonth(newDate),
    monthEnd: endOfMonth(newDate),
  };
};

export const budgetMonthRange = createBudgetMonthRange;
