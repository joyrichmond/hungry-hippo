import Category from '../models/Category';

type SelectedCategoryAction = {
  item: Category;
  type: 'SET_SELECTED_CATEGORY';
};

export const selectedCategoryReducer = (
  state: Category | null = null,
  action: SelectedCategoryAction,
) => {
  const { item, type } = action;

  switch (type) {
    case 'SET_SELECTED_CATEGORY': {
      return item;
    }

    default: {
      return state;
    }
  }
};
