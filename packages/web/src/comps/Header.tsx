import { endOfMonth, format, startOfMonth } from 'date-fns';
import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
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
  const [startDate, setStartDate] = useState(new Date());

  // const budgetsArray = budgets && Object.values(budgets);
  // const selectedYear = format(state.monthStart, 'yyyy');
  // const selectedMonth = format(state.monthStart, 'MMMM');

  const updateMonth = (newMonth: Date) => {
    setStartDate(newMonth);
    const newSelectedMonth = createBudgetMonthRange(newMonth);
    dispatch({
      type: 'SET_SELECTED_MONTH',
      item: newSelectedMonth,
    });
  };

  // const updateMonth = (newMonth: string) => {
  //   // const newSelectedMonth = createBudgetMonthRange(newMonth, selectedYear);
  //   dispatch({
  //     type: 'SET_SELECTED_MONTH',
  //     item: newMonth,
  //   });
  // };

  // const updateYear = (newYear: string) => {
  //   const newSelectedMonth = createBudgetMonthRange(selectedMonth, newYear);
  //   dispatch({
  //     type: 'SET_SELECTED_MONTH',
  //     item: newSelectedMonth,
  //   });
  // };

  return (
    <div className="header flex-h flex-space-between">
      {/* <span>Month</span>
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
      </div> */}
      <DatePicker
        selected={startDate}
        onChange={date => updateMonth(date!)}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
      />
    </div>
  );
};

export default Header;
