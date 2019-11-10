import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers/spendingTrackerReducer';
import { addNewCategory } from '../actions/spendingTrackerActions';

import CategoryLine from './spendingTracker/CategoryLine';
import AddButton from './utils/AddButton';

type Props = {
  budgetCategories: State['budgetCategories'];
};

const SpendingTracker: FC<Props> = ({ budgetCategories }) => {
  return (
    <div>
      <h2>Track My Spending</h2>
      {budgetCategories.map(x => {
        return <CategoryLine key={x.category} {...x} />;
      })}
      <AddButton />
    </div>
  );
};

const mapPropsToState = (state: State) => ({
  budgetCategories: state.budgetCategories,
});

const mapDispatchToProps = {
  addNewCategory,
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(SpendingTracker);
