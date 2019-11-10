import React, { FC } from 'react';

type Props = {};

const AddNewCategory: FC<Props> = () => (
  <div>
    <input type="text" placeholder="Enter a category name" />
    <input type="text" placeholder="Enter a budgeted montly amount" />
  </div>
);

export default AddNewCategory;
