import { endOfMonth, lastDayOfMonth, startOfMonth } from 'date-fns';

export const createBudgetMonthRange = (month: string, year: string) => {
  return {
    monthStart: startOfMonth(new Date(`${month}, ${year}`)),
    monthEnd: endOfMonth(new Date(`${month}, ${year}`)),
  };
};

export const budgetMonthRange = createBudgetMonthRange;
