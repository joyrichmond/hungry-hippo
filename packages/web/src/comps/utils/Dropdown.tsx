import React, { FC } from 'react';

type Props = {
  array: (string | number)[];
  setStateFn: any;
  defaultOption: string | number;
};

const Dropdown: FC<Props> = ({ array, setStateFn, defaultOption }) => (
  <select value={defaultOption} disabled={array.length === 0}>
    (array.length > 0) :
    {array.map(item => (
      <option key={item} value={item} onClick={() => setStateFn(item)}>
        {item}
      </option>
    ))}
    ? <option>{defaultOption}</option>
  </select>
);

export default Dropdown;
