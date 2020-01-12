import React, { forwardRef } from 'react';

type Props = {
  value?: any;
  onClick?: any;
};

const DatePickerCustomInput = forwardRef<any, Props>(
  ({ onClick, value }, ref) => (
    <button ref={ref} className="datePickerCustomInput" onClick={onClick}>
      {value}
    </button>
  ),
);

export default DatePickerCustomInput;
