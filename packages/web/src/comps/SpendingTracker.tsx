import { compareDesc } from 'date-fns';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useBudgets, useCategories, useTransactions } from '../hooks/useCollection';
import Category from '../models/Category';
import Transaction from '../models/Transaction';
import { request } from '../services/api-service';
import { addBudget } from '../services/budget-service';
import { getTotalSpent } from '../services/get-total-spent';
import { budgetMonthRange } from '../services/time-service';
import { addTransaction, filterTransactions } from '../services/transactions-service';
import { AppState } from '../store/root';
import AddNewCategory from './spendingTracker/AddNewCategory';
//import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';
import LoadingView from './utils/LoadingView';

const SpendingTracker: FC = () => {
  const dispatch = useDispatch();
  const categories = useCategories();
  const budgets = useBudgets();
  const transactions = useTransactions();
  const selectedMonth = useSelector((state: AppState) => state.selectedMonth);

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

    if (sortedBudgets !== null && sortedBudgets.length) {
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
    dispatch({ type: 'SET_SELECTED_CATEGORY', item: category });
  };

  return (
    <div className="spending-tracker">
      <h3>Spending Tracker</h3>
      {categories && budgets ? (
        [...Object.values(categories)].map(category => {
          const budget = getBudget(category._id as string);
          const budgetedAmount = budget && budget.amount;
          const transactionHistory = filterTransactions(transactions, selectedMonth, category);

          // return (
          // <CategoryLine
          //   category={category}
          //   budgetedAmount={budgetedAmount}
          //   transactionHistory={filterTransactions(
          //     transactions,
          //     selectedMonth.monthStart,
          //     selectedMonth.monthEnd,
          //     category,
          //   )}
          //   key={category._id as string}
          //   setBudget={setBudget}
          //   setTransaction={setTransaction}
          // />
          return (
            <div className="categoryLine" onClick={() => setSelectedCategory(category)}>
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
      {isUserAddingCategory && <AddNewCategory addNewCategory={addNewCategory} />}
      <AddButton handleClick={() => setIsUserAddingCategory(true)} />
    </div>
  );
};

export default SpendingTracker;
