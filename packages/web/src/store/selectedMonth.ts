import { lastDayOfMonth, startOfMonth } from 'date-fns';

import SelectedMonth from '../models/SelectedMonth';

type SelectedMonthAction = {
  item: SelectedMonth;
  type: 'SET_SELECTED_MONTH';
};

export type SelectedMonthState = {
  selectedMonth: SelectedMonth;
};

export const selectedMonthReducer = (
  state: SelectedMonthState = {
    selectedMonth: {
      monthStart: startOfMonth(new Date()),
      monthEnd: lastDayOfMonth(new Date()),
    },
  },
  action: SelectedMonthAction,
) => {
  const { item, type } = action;

  switch (type) {
    case 'SET_SELECTED_MONTH': {
      return { selectedMonth: item };
    }

    default: {
      return state;
    }
  }
};
