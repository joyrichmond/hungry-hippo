import { ADD_NEW_CATEGORY } from '../actions/spendingTrackerActions';
import { mockTransactionHistory } from '../mock-data/mockTransactionHistory';

export type State = {
  budgetCategories: {
    category: string;
    budgetedAmount: number;
  }[];
  transactionHistory: {
    date: string;
    amount: number;
  }[];
};

export const initialState = (): State => ({
  budgetCategories: [
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
};

export default (
  state = initialState(),
  action: Action = {
    type: undefined,
  },
) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY: {
      return {
        ...state,
        budgetCategories: [
          ...state.budgetCategories,
          { category: action.category, budgetedAmount: action.budgetedAmount },
        ],
      };
    }
    default:
      return state;
  }
};
