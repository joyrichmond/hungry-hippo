import React, { FC, useState } from 'react';

import Transaction from '../../models/Transaction';
import { getTotalSpent } from '../../services/get-total-spent';

type Props = {
  budgetedAmount?: number | undefined;
  setBudget: (amount: number, categoryId: string) => void;
  transactionHistory?: Transaction[] | null | undefined;
  categoryId: string;
};

const LineItemBudget: FC<Props> = ({
  budgetedAmount,
  setBudget,
  transactionHistory,
  categoryId,
}) => {
  const [budgetInput, setBudgetInput] = useState(budgetedAmount || '');

  return (
    <div className="lineItemBudget flex-h">
      {budgetedAmount && (
        <span className="flex-h">
          <span>{budgetedAmount - getTotalSpent(transactionHistory)}</span>
          <span>of</span>
        </span>
      )}
      <form
        onSubmit={e => {
          setBudget(Number(budgetInput), categoryId);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="amount"
          className={budgetedAmount ? 'displayInput' : 'requireInput'}
          value={budgetInput}
          onChange={e => setBudgetInput(e.target.value)}
          onFocus={e => e.target.select()}
          required
        />
      </form>
    </div>
  );
};

export default LineItemBudget;
