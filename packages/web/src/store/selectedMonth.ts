import { lastDayOfMonth, startOfMonth } from 'date-fns';

import SelectedMonth from '../models/SelectedMonth';

type SelectedMonthAction = {
  item: SelectedMonth;
  type: 'SET_SELECTED_MONTH';
};

export type SelectedMonthState = {
  monthStart: Date;
  monthEnd: Date;
};

const initState: SelectedMonthState = {
  monthStart: new Date(startOfMonth(new Date())),
  monthEnd: new Date(lastDayOfMonth(new Date())),
};

export const selectedMonthReducer = (
  state = initState,
  action: SelectedMonthAction,
) => {
  const { item, type } = action;

  switch (type) {
    case 'SET_SELECTED_MONTH': {
      return {
        monthStart: new Date(item.monthStart),
        monthEnd: new Date(item.monthEnd),
      };
    }

    default: {
      return state;
    }
  }
};
