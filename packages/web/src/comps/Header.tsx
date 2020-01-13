import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../services/auth-service';
import { createBudgetMonthRange } from '../services/time-service';
import { AppState } from '../store/root';
import DatePickerCustomInput from './utils/DatePickerCustomInput';

const Header: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }: AppState) => auth);

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
        <DatePicker selected={startDate} onChange={date => updateMonth(date!)} dateFormat="MMMM yyyy" customInput={<DatePickerCustomInput />} showMonthYearPicker />
      </div>
      {auth && (
        <div className="profile">
          <span>Hi {auth?.firstname}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
