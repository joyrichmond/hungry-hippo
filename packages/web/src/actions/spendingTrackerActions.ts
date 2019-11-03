export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const addNewCategory = (category: string, budgetedAmount: number) => ({
  type: ADD_NEW_CATEGORY,
  category,
  budgetedAmount
});
