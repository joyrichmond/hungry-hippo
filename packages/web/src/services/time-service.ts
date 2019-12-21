import { lastDayOfMonth, startOfMonth } from 'date-fns';

export const createBudgetMonthRange = (month: string, year: string) => {
  return {
    monthStart: startOfMonth(new Date(month)),
    monthEnd: lastDayOfMonth(new Date(year)),
  };
};

export const budgetMonthRange = createBudgetMonthRange;
