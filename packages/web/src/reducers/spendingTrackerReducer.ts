import {
  ADD_NEW_CATEGORY,
  ADD_TRANSACTION_TO_HISTORY,
} from '../actions/spendingTrackerActions';
import { mockTransactionHistory } from '../mock-data/mockTransactionHistory';

export type State = {
  budgets: {
    category: string;
    budgetedAmount: number;
  }[];
  transactionHistory: {
    date: string;
    amount: number;
  }[];
};

export const initialState = (): State => ({
  budgets: [
    { category: 'Groceries', budgetedAmount: 750 },
    { category: 'Kids', budgetedAmount: 400 },
    { category: 'Home', budgetedAmount: 200 },
  ],
  transactionHistory: mockTransactionHistory,
});

type Action = {
  type?: string;
  category?: string;
  budgetedAmount?: number;
  transaction?: any;
};

export default (state = initialState(), action: Action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY: {
      return {
        ...state,
        budgets: [
          ...state.budgets,
          { category: action.category, budgetedAmount: action.budgetedAmount },
        ],
      };
    }

    case ADD_TRANSACTION_TO_HISTORY: {
      return {
        ...state,
        transactionHistory: [...state.transactionHistory, action.transaction],
      };
    }

    default:
      return state;
  }
};
