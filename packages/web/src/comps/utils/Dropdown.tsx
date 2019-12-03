import React, { FC } from 'react';

type Props = {
  array: any[];
  setStateFn: any;
};

const Dropdown: FC<Props> = ({ array, setStateFn }) => (
  <div>
    {array.map((item: any, i: number) => (
      <div key={i} onClick={() => setStateFn(item)}>
        {item}
      </div>
    ))}
  </div>
);

export default Dropdown;
