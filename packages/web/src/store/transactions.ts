import Transaction from '../models/Transaction';

type TransactionsAction = {
  collection?: Transaction[];
  item?: Transaction;
  type: 'SET_TRANSACTIONS' | 'ADD_TRANSACTION' | 'RESET';
};

export type TransactionsState = {
  [key: string]: Transaction;
};

export const transactionsReducer = (
  state: TransactionsState | null = null,
  action: TransactionsAction,
) => {
  const { collection, item, type } = action;

  switch (type) {
    case 'SET_TRANSACTIONS': {
      return collection!.reduce(
        (prev, curr) => ({ ...prev, [curr._id as string]: curr }),
        {} as TransactionsState,
      );
    }

    case 'ADD_TRANSACTION': {
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
