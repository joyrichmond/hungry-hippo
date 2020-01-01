type SelectedCategoryAction = {
  item: string;
  type: 'SET_SELECTED_CATEGORY';
};

export const selectedCategoryReducer = (
  state: string | null = null,
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
