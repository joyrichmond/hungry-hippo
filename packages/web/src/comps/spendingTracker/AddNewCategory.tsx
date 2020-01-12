import React, { FC, FormEvent, useState } from 'react';

type Props = {
  addNewCategory: (categoryName: string) => Promise<any>;
  isOpen: boolean;
  setIsOpen: any;
};

const AddNewCategory: FC<Props> = ({ addNewCategory, isOpen, setIsOpen }) => {
  const [categoryInput, setCategoryInput] = useState('');

  const handleSubmitNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewCategory(categoryInput);
    setCategoryInput('');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <form className="flex-h input-container" onSubmit={handleSubmitNewCategory}>
          <input type="text" placeholder="Enter a category name" onChange={e => setCategoryInput(e.target.value)} value={categoryInput} required />
          <button className="fill-button">Add</button>
        </form>
      )}
    </>
  );
};

export default AddNewCategory;
