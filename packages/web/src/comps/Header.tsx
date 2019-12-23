import { endOfMonth, format, startOfMonth } from 'date-fns';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { months } from '../data/dates';
import { useBudgets } from '../hooks/useCollection';
import { getBudgetYears } from '../services/get-years-array';
import { createBudgetMonthRange } from '../services/time-service';
import { AppState } from '../store/root';
import Dropdown from './utils/Dropdown';

const Header: FC = () => {
  // const [selectedMonth, setSelectedMonth] = useState(
  //   format(new Date(), 'MMMM'),
  // );
  // const [selectedYear, setSelectedYear] = useState(format(new Date(), 'yyyy'));

  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.selectedMonth);
  const budgets = useBudgets();

  const budgetsArray = budgets && Object.values(budgets);
  const selectedYear = format(state.selectedMonth.monthStart, 'yyyy');
  const selectedMonth = format(state.selectedMonth.monthStart, 'MMMM');

  const updateMonth = (newMonth: string) => {
    const newSelectedMonth = createBudgetMonthRange(newMonth, selectedYear);
    dispatch({
      type: 'SET_SELECTED_MONTH',
      item: newSelectedMonth,
    });
  };

  const updateYear = (newYear: string) => {
    const newSelectedMonth = createBudgetMonthRange(selectedMonth, newYear);
    dispatch({
      type: 'SET_SELECTED_MONTH',
      item: newSelectedMonth,
    });
  };

  return (
    <div className="header flex-h flex-space-between">
      <span>Month</span>
      <div>
        <Dropdown
          value={selectedMonth}
          array={months}
          setStateFn={updateMonth}
          defaultOption={format(new Date(), 'MMMM')}
        />
        <Dropdown
          value={selectedYear}
          array={budgetsArray ? getBudgetYears(budgetsArray) : []}
          setStateFn={updateYear}
          defaultOption={format(new Date(), 'yyyy')}
        />
      </div>
    </div>
  );
};

export default Header;
