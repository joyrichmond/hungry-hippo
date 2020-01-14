import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import Auth from '../models/Auth';
import { logout } from '../services/auth-service';
import { createBudgetMonthRange } from '../services/time-service';
import DatePickerCustomInput from './utils/DatePickerCustomInput';

type Props = {
  dispatch: any;
  auth: Auth | null;
};

const Header: FC<Props> = ({ dispatch, auth }) => {
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
