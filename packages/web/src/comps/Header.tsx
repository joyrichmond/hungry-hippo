import { endOfMonth, format, startOfMonth } from 'date-fns';
import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';

import { createBudgetMonthRange } from '../services/time-service';
import DatePickerCustomInput from './utils/DatePickerCustomInput';

const Header: FC = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const updateMonth = (newMonth: Date) => {
    setStartDate(newMonth);
    const newSelectedMonth = createBudgetMonthRange(newMonth);
    dispatch({
      type: 'SET_SELECTED_MONTH',
      item: newSelectedMonth,
    });
  };

  return (
    <div className="header flex-h flex-space-between">
      <img src="/hungryHippoLogo.png" className="logo" />
      <div className="datePicker">
        <DatePicker
          selected={startDate}
          onChange={date => updateMonth(date!)}
          dateFormat="MMMM yyyy"
          customInput={<DatePickerCustomInput />}
          showMonthYearPicker
        />
      </div>
    </div>
  );
};

export default Header;
