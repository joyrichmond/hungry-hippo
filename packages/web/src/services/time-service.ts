import { lastDayOfMonth, startOfMonth } from 'date-fns';

export const budgetMonthRange = {
  start: startOfMonth(new Date()),
  end: lastDayOfMonth(new Date()),
};
