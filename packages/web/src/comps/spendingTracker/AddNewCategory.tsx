import React, { FC, FormEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <form className="flex-h addNewCategory input-button-group" onSubmit={handleSubmitNewCategory}>
          <input type="text" placeholder="new category" onChange={e => setCategoryInput(e.target.value)} value={categoryInput} required />
          <button>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
          </button>
        </form>
      )}
    </>
  );
};

export default AddNewCategory;
