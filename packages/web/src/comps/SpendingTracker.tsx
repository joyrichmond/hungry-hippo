import { compareDesc, lastDayOfMonth, startOfMonth } from 'date-fns';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useBudgets, useCategories } from '../hooks/useCollection';
import Category from '../models/Category';
import Transaction from '../models/Transaction';
import { request } from '../services/api-service';
import { addBudget } from '../services/budget-service';
import AddNewCategory from './spendingTracker/AddNewCategory';
import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';
import LoadingView from './utils/LoadingView';

const SpendingTracker: FC = () => {
  const dispatch = useDispatch();
  const categories = useCategories();
  const budgets = useBudgets();
  const transactions = [] as Transaction[]; // useTransactions();

  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const isLoading = !!categories || !!budgets;

  const budgetMonthRange = {
    start: startOfMonth(new Date()),
    end: lastDayOfMonth(new Date()),
  };

  const addNewCategory = (categoryName: string) =>
    request('categories', {
      method: 'POST',
      body: { name: categoryName },
    }).then(item => dispatch({ type: 'ADD_CATEGORY', item }));

  const getBudget = (categoryId: string) => {
    const sortedBudgets =
      budgets &&
      Object.values(budgets)
        .filter(
          budget =>
            categoryId === (budget.categoryId as string) &&
            budget.effectiveDate <= budgetMonthRange.end,
        )
        .sort((a, b) => compareDesc(a.effectiveDate, b.effectiveDate));

    if (sortedBudgets !== null && sortedBudgets.length) {
      return sortedBudgets[0];
    }

    return undefined;
  };

  const setBudget = (amount: number, categoryId: string) =>
    addBudget({
      effectiveDate: new Date(),
      amount: amount,
      categoryId: categoryId,
    }).then(item => dispatch({ type: 'ADD_BUDGET', item }));

  const getTransactions = (category: Category) =>
    transactions.filter(
      transaction =>
        category._id === transaction.categoryId &&
        budgetMonthRange.start <= transaction.date &&
        transaction.date <= budgetMonthRange.end,
    );

  return (
    <div className="spending-tracker">
      <h2>Track My Spending</h2>
      {categories && budgets ? (
        [...Object.values(categories)].map(category => {
          const budget = getBudget(category._id as string);
          const budgetedAmount = budget && budget.amount;

          return (
            <CategoryLine
              category={category}
              budgetedAmount={budgetedAmount}
              transactionHistory={getTransactions(category)}
              key={category._id as string}
              setBudget={setBudget}
            />
          );
        })
      ) : (
        <LoadingView isLoading={isLoading} />
      )}
      {isUserAddingCategory && (
        <AddNewCategory addNewCategory={addNewCategory} />
      )}
      <AddButton handleClick={() => setIsUserAddingCategory(true)} />
    </div>
  );
};

export default SpendingTracker;
