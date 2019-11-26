import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers/spendingTrackerReducer';
import {
  addNewCategory,
  addTransactionToHistory,
} from '../actions/spendingTrackerActions';

import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';
import AddNewCategory from './spendingTracker/AddNewCategory';

type Props = {
  budgets: State['budgets'];
  addNewCategory: any;
  addTransactionToHistory: any;
  transactionHistory: { date: string; amount: number }[];
};

const SpendingTracker: FC<Props> = ({
  budgets: budgets,
  addNewCategory,
  addTransactionToHistory,
  transactionHistory,
}) => {
  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);

  const handleAddCategory: any = () => setIsUserAddingCategory(true);

  const handleSubmitNewCategory: any = (category: any, budgetedAmount: any) => {
    addNewCategory(category, budgetedAmount);
    setIsUserAddingCategory(false);
  };

  return (
    <div className="spending-tracker">
      <h2>Track My Spending</h2>
      {budgets.map(x => {
        return (
          <CategoryLine
            transactionHistory={transactionHistory}
            addTransactionToHistory={addTransactionToHistory}
            key={x.category}
            {...x}
          />
        );
      })}
      {isUserAddingCategory && (
        <AddNewCategory handleClick={handleSubmitNewCategory} />
      )}
      <AddButton handleClick={handleAddCategory} />
    </div>
  );
};

const mapPropsToState = (state: State) => ({
  budgets: state.budgets,
  transactionHistory: state.transactionHistory,
});

const mapDispatchToProps = {
  addNewCategory,
  addTransactionToHistory,
};

export default connect(mapPropsToState, mapDispatchToProps)(SpendingTracker);
