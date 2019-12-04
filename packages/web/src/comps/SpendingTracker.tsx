import React, { FC, useState } from 'react';

import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';
import AddNewCategory from './spendingTracker/AddNewCategory';
import {
  useBudgets,
  useTransactions,
  useCategories,
} from '../hooks/useCollection';
import { format, lastDayOfMonth, startOfMonth, compareDesc } from 'date-fns';
import Category from '../../../api/src/models/Category';
import LoadingView from './utils/LoadingView';

const SpendingTracker: FC = () => {
  const categories = useCategories();
  const budgets = useBudgets();
  const transactions = useTransactions();

  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (categories) {
    setIsLoading(false);
  }

  const budgetMonthRange = {
    start: startOfMonth(new Date()),
    end: lastDayOfMonth(new Date()),
  };
  const handleAddCategory: any = () => setIsUserAddingCategory(true);

  const getBudget = (category: Category) => {
    const sortedBudgets = budgets
      .filter(
        budget =>
          category._id === budget.categoryId &&
          budget.effectiveDate <= budgetMonthRange.end,
      )
      .sort((a, b) => compareDesc(a.effectiveDate, b.effectiveDate));

    if (sortedBudgets.length) {
      return sortedBudgets[0];
    }
  };

  const getTransactions = (category: Category) =>
    transactions.filter(
      transaction =>
        category._id === transaction.categoryId &&
        budgetMonthRange.start <= transaction.date &&
        transaction.date <= budgetMonthRange.end,
    );

  const handleSubmitNewCategory: any = (category: any, budgetedAmount: any) => {
    //addNewCategory(category, budgetedAmount);
    setIsUserAddingCategory(false);
  };

  return (
    <div className="spending-tracker">
      <h2>Track My Spending</h2>
      {categories ? (
        categories.map(category => {
          const budget = getBudget(category);
          const budgetedAmount = budget && budget.amount;
          return (
            <CategoryLine
              category={category.name}
              budgetedAmount={budgetedAmount}
              transactionHistory={getTransactions(category)}
              key={category._id!.toHexString()}
            />
          );
        })
      ) : (
        <LoadingView isLoading={isLoading} />
      )}
      {isUserAddingCategory && (
        <AddNewCategory handleClick={handleSubmitNewCategory} />
      )}
      <AddButton handleClick={handleAddCategory} />
    </div>
  );
};

export default SpendingTracker;
