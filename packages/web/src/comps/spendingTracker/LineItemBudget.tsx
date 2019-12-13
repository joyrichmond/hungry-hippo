import React, { FC, useState } from 'react';

import Category from '../../../../api/src/models/Category';
import Transaction from '../../../../api/src/models/Transaction';
import { getTotalSpent } from '../../services/get-total-spent';

type Props = {
  budgetedAmount?: number | undefined;
  addNewBudget: (amount: number, categoryId: any) => Promise<any>;
  transactionHistory: Transaction[];
  categoryId: string;
};

const LineItemBudget: FC<Props> = ({
  budgetedAmount,
  addNewBudget,
  transactionHistory,
  categoryId,
}) => {
  const [budgetInput, setBudgetInput] = useState(budgetedAmount || null);

  return (
    <div>
      {budgetedAmount && (
        <span>{budgetedAmount - getTotalSpent(transactionHistory)} of</span>
      )}
      <form
        onSubmit={e => {
          addNewBudget(budgetInput!, categoryId);
          e.preventDefault();
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
