import React, { FC, useState } from 'react';
import { format } from 'date-fns';

type Props = {
  handleClick: any;
};

const AddNewCategory: FC<Props> = ({ handleClick }) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [budgetAmountInput, setBudgetAmountInput] = useState('');
  const [date, setDate] = useState();

  const handleCategoryInput = (e: any) => setCategoryInput(e.target.value);
  const handleAmountInput = (e: any) => setBudgetAmountInput(e.target.value);
  const currentDate = format(new Date(), 'MM-dd-yyyy');
  const newCategory = { name: categoryInput };
  const newBudget = {
    categoryName: categoryInput,
    effectiveDate: date || currentDate,
    amount: budgetAmountInput,
  };

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
      <input
        type="text"
        onChange={e => setDate(e.target.value)}
        value={date}
        placeholder={`effective date: ${currentDate}`}
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
