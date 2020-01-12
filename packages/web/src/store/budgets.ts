import Budget from '../models/Budget';

type BudgetsAction = {
  collection?: Budget[];
  item?: Budget;
  type: 'SET_BUDGETS' | 'SET_BUDGET' | 'RESET';
};

export type BudgetsState = {
  [key: string]: Budget;
};

export const budgetsReducer = (state: BudgetsState | null = null, action: BudgetsAction) => {
  const { collection, item, type } = action;

  switch (type) {
    case 'SET_BUDGETS': {
      return collection!.reduce((prev, curr) => ({ ...prev, [curr._id as string]: curr }), {} as BudgetsState);
    }

    case 'SET_BUDGET': {
      return { ...state, [item!._id as string]: item! };
    }

    case 'RESET': {
      return null;
    }

    default: {
      return state;
    }
  }
};
