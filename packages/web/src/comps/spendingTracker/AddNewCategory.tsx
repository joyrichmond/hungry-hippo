import React, { FC, FormEvent, useState } from 'react';

type Props = {
  addNewCategory: (categoryName: string) => Promise<any>;
};

const AddNewCategory: FC<Props> = ({ addNewCategory }) => {
  const [categoryInput, setCategoryInput] = useState('');

  const handleSubmitNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewCategory(categoryInput);
    setCategoryInput('');
  };

  return (
    <form className="flex-h input-container" onSubmit={handleSubmitNewCategory}>
      <input
        type="text"
        placeholder="Enter a category name"
        onChange={e => setCategoryInput(e.target.value)}
        value={categoryInput}
        required
      />
      <button className="fill-button">Add</button>
    </form>
  );
};

export default AddNewCategory;
