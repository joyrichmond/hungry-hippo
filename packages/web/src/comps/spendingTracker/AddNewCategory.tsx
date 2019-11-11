import React, { FC, useState } from 'react';

type Props = {
  handleClick: any;
};

const AddNewCategory: FC<Props> = ({ handleClick }) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [budgetAmountInput, setBudgetAmountInput] = useState('');

  const handleCategoryInput = (e: any) => setCategoryInput(e.target.value);
  const handleAmountInput = (e: any) => setBudgetAmountInput(e.target.value);

  return (
    <div className="flex-h input-container">
      <input
        type="text"
        placeholder="Enter a category name"
        onChange={e => handleCategoryInput(e)}
        value={categoryInput}
      />
      <input
        type="number"
        placeholder="Enter a budgeted montly amount"
        onChange={e => handleAmountInput(e)}
        value={budgetAmountInput}
      />
      <button
        className="fill-button"
        onClick={() => handleClick(categoryInput, budgetAmountInput)}
      >
        Add
      </button>
    </div>
  );
};

export default AddNewCategory;
