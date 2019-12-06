import React, { FC } from 'react';

type Props = {
  array: (string | number)[];
  setStateFn: any;
  defaultOption: string | number;
  value: string | number;
};

const Dropdown: FC<Props> = ({ array, setStateFn, defaultOption, value }) => (
  <select
    value={value}
    disabled={array.length === 0}
    onChange={e => setStateFn(e.target.value)}
  >
    {array.length > 0 ? (
      array.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))
    ) : (
      <option>{defaultOption}</option>
    )}
  </select>
);

export default Dropdown;
