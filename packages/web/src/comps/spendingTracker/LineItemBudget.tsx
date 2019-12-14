import React, { FC, useState } from 'react';

import Transaction from '../../models/Transaction';
import { getTotalSpent } from '../../services/get-total-spent';

type Props = {
  budgetedAmount?: number | undefined;
  setBudget: (amount: number, categoryId: any) => Promise<any>;
  transactionHistory?: Transaction[] | undefined;
  categoryId: string;
};

const LineItemBudget: FC<Props> = ({
  budgetedAmount,
  setBudget,
  transactionHistory,
  categoryId,
}) => {
  const [budgetInput, setBudgetInput] = useState(
    budgetedAmount ? budgetedAmount.toString() : undefined,
  );

  return (
    <div>
      {budgetedAmount && (
        <span>{budgetedAmount - getTotalSpent(transactionHistory)} of</span>
      )}
      <form
        onSubmit={e => {
          setBudget(Number(budgetInput), categoryId);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="budgeted amount"
          className={budgetedAmount ? 'displayInput' : 'requireInput'}
          value={budgetInput}
          onChange={e => setBudgetInput(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default LineItemBudget;
