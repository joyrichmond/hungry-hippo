import Category from '../models/Category';

type CategoriesAction = {
  collection?: Category[];
  item?: Category;
  type: 'SET_CATEGORIES' | 'ADD_CATEGORY' | 'RESET';
};

export type CategoriesState = {
  [key: string]: Category;
};

export const categoriesReducer = (
  state: CategoriesState | null = null,
  action: CategoriesAction,
) => {
  const { collection, item, type } = action;

  switch (type) {
    case 'SET_CATEGORIES': {
      return collection!.reduce(
        (prev, curr) => ({ ...prev, [curr._id as string]: curr }),
        {} as CategoriesState,
      );
    }

    case 'ADD_CATEGORY': {
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
