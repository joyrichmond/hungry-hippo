import { compareDesc } from 'date-fns';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Category from '../models/Category';
import { request } from '../services/api-service';
import { addBudget } from '../services/budget-service';
import { getTotalSpent } from '../services/get-total-spent';
import { filterTransactions } from '../services/transactions-service';
import { BudgetsState } from '../store/budgets';
import { CategoriesState } from '../store/categories';
import { AppState } from '../store/root';
import { TransactionsState } from '../store/transactions';
import AddNewCategory from './spendingTracker/AddNewCategory';
import AddButton from './utils/AddButton';
import LoadingView from './utils/LoadingView';

type Props = {
  categories?: CategoriesState | null;
  budgets?: BudgetsState | null;
  transactions?: TransactionsState | null;
};

const SpendingTracker: FC<Props> = ({ categories, budgets, transactions }) => {
  const dispatch = useDispatch();
  const { selectedMonth, selectedCategory } = useSelector(({ selectedMonth, selectedCategory }: AppState) => ({ selectedMonth, selectedCategory }));

  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const isLoading = !!categories || !!budgets;

  const addNewCategory = (categoryName: string) =>
    request('categories', {
      method: 'POST',
      body: { name: categoryName },
    }).then(item => dispatch({ type: 'ADD_CATEGORY', item }));

  const getBudget = (categoryId: string) => {
    const sortedBudgets =
      budgets &&
      Object.values(budgets)
        .filter(budget => categoryId === (budget.categoryId as string) && budget.effectiveDate <= selectedMonth.monthEnd)
        .sort((a, b) => compareDesc(a.effectiveDate, b.effectiveDate));

    if (sortedBudgets && sortedBudgets.length) {
      return sortedBudgets[0];
    }

    return undefined;
  };

  const setBudget = (amount: number, categoryId: string) => {
    addBudget({
      effectiveDate: selectedMonth.monthStart,
      amount: amount,
      categoryId: categoryId,
    }).then(item => dispatch({ type: 'SET_BUDGET', item }));
  };

  const setSelectedCategory = (category: Category) => {
    const item = selectedCategory && selectedCategory._id === category._id ? null : category;
    dispatch({ type: 'SET_SELECTED_CATEGORY', item });
  };

  return (
    <div className="spending-tracker spendingSidebar">
      <h3>Spending Tracker</h3>
      {categories && budgets ? (
        [...Object.values(categories)].map(category => {
          const budget = getBudget(category._id as string);
          const budgetedAmount = budget && budget.amount;
          const transactionHistory = filterTransactions(transactions, selectedMonth, category);

          return (
            <div
              className={`categoryLine ${selectedCategory && selectedCategory._id === category._id ? 'selectedCategory' : ''}`}
              onClick={() => setSelectedCategory(category)}
              key={category.name}
            >
              <span className="categoryName">{category.name}</span>
              <div className="budgetValues">
                <span>{budgetedAmount ? budgetedAmount - getTotalSpent(transactionHistory) : ''} |</span>
                <span>{budgetedAmount}</span>
              </div>
            </div>
          );
        })
      ) : (
        <LoadingView isLoading={isLoading} />
      )}
      {isUserAddingCategory && <AddNewCategory addNewCategory={addNewCategory} isOpen={isUserAddingCategory} setIsOpen={setIsUserAddingCategory} />}
      <AddButton handleClick={() => setIsUserAddingCategory(true)} />
    </div>
  );
};

export default SpendingTracker;
