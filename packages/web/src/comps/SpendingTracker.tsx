import React, { Dispatch, FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Category from '../models/Category';
import { request } from '../services/api-service';
import { calculateRemainingBudget } from '../services/budget-service';
import { filterTransactions } from '../services/transactions-service';
import { BudgetsState } from '../store/budgets';
import { CategoriesState } from '../store/categories';
import { SelectedMonthState } from '../store/selectedMonth';
import { TransactionsState } from '../store/transactions';
import AddNewCategory from './spendingTracker/AddNewCategory';
import LoadingView from './utils/LoadingView';

type Props = {
  categories?: CategoriesState | null;
  budgets?: BudgetsState | null;
  transactions?: TransactionsState | null;
  dispatch: Dispatch<any>;
  selectedMonth: SelectedMonthState;
  selectedCategory: Category | null;
};

const SpendingTracker: FC<Props> = ({ categories, budgets, transactions, dispatch, selectedMonth, selectedCategory }) => {
  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const isLoading = !!categories || !!budgets;

  const addNewCategory = (categoryName: string) =>
    request('categories', {
      method: 'POST',
      body: { name: categoryName },
    }).then(item => dispatch({ type: 'ADD_CATEGORY', item }));

  const setSelectedCategory = (category: Category) => {
    const item = selectedCategory && selectedCategory._id === category._id ? null : category;
    dispatch({ type: 'SET_SELECTED_CATEGORY', item });
  };

  return (
    <div className="spending-tracker spendingSidebar">
      <h3>Spending Tracker</h3>
      {categories && budgets ? (
        [...Object.values(categories)].map(category => {
          const transactionHistory = filterTransactions(transactions, selectedMonth, category);
          const { budgetedAmount, remainingBudget } = calculateRemainingBudget(category._id!, budgets, selectedMonth, transactionHistory);

          return (
            <div
              className={`categoryLine ${selectedCategory && selectedCategory._id === category._id ? 'selectedCategory' : ''}`}
              onClick={() => setSelectedCategory(category)}
              key={category.name}
            >
              <span className="categoryName">{category.name}</span>
              <div className="budgetValues">
                <span>{remainingBudget}</span>
                <span>{budgetedAmount || 0}</span>
              </div>
            </div>
          );
        })
      ) : (
        <LoadingView isLoading={isLoading} />
      )}
      {isUserAddingCategory && <AddNewCategory addNewCategory={addNewCategory} isOpen={isUserAddingCategory} setIsOpen={setIsUserAddingCategory} />}
      <button className={`${isUserAddingCategory && 'cancel-button'}`} onClick={() => setIsUserAddingCategory(!isUserAddingCategory)}>
        {isUserAddingCategory ? 'Cancel Add Category' : <FontAwesomeIcon icon={['fas', 'plus']} />}
      </button>
    </div>
  );
};

export default SpendingTracker;
