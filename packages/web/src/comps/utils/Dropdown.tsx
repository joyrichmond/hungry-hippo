import React, { FC } from 'react';

type Props = {
  array: Date[];
  setStateFn: any;
};

const Dropdown: FC<Props> = ({ array, setStateFn }) => (
  <div>
    {array.map((item, i) => (
      <div key={i} onClick={() => setStateFn(item)}>
        {item}
      </div>
    ))}
  </div>
);

export default Dropdown;
