import React, { FC, useState } from 'react';

import Transaction from '../../../../api/src/models/Transaction';
import { getTotalSpent } from '../../services/get-total-spent';

type Props = {
  budgetedAmount?: number | undefined;
  addNewBudget: (amount: number) => Promise<any>;
  transactionHistory: Transaction[];
};

const LineItemBudget: FC<Props> = ({
  budgetedAmount,
  addNewBudget,
  transactionHistory,
}) => {
  const [budgetInput, setBudgetInput] = useState(budgetedAmount || null);

  return (
    <div>
      {budgetedAmount && (
        <span>{budgetedAmount - getTotalSpent(transactionHistory)} of</span>
      )}
      <form
        onSubmit={e => {
          e.preventDefault();
          addNewBudget(budgetInput!);
        }}
      >
        <input
          type="text"
          placeholder="budgeted amount"
          className={budgetedAmount ? 'displayInput' : 'requireInput'}
          value={budgetedAmount}
          onChange={e => setBudgetInput(parseInt(e.target.value))}
          required
        />
      </form>
    </div>
  );
};

export default LineItemBudget;
