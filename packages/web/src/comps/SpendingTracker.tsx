import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers/spendingTrackerReducer';
import { addNewCategory } from '../actions/spendingTrackerActions';

import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';
import AddNewCategory from './spendingTracker/AddNewCategory';

type Props = {
  budgetCategories: State['budgetCategories'];
  addNewCategory: any;
  transactionHistory: { date: string; amount: number }[];
};

const SpendingTracker: FC<Props> = ({
  budgetCategories,
  addNewCategory,
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
      {budgetCategories.map(x => {
        return (
          <CategoryLine
            transactionHistory={transactionHistory}
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
  budgetCategories: state.budgetCategories,
  transactionHistory: state.transactionHistory,
});

const mapDispatchToProps = {
  addNewCategory,
};

export default connect(mapPropsToState, mapDispatchToProps)(SpendingTracker);
