export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const addNewCategory = (category: string, budgetedAmount: number) => ({
  type: ADD_NEW_CATEGORY,
  category,
  budgetedAmount,
});

export const ADD_TRANSACTION_TO_HISTORY = 'ADD_TRANSACTION_TO_HISTORY';
export const addTransactionToHistory = (transaction: any) => ({
  type: ADD_TRANSACTION_TO_HISTORY,
  transaction,
});
