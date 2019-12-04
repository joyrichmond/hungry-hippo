import Category from '../../../api/src/models/Category';

type CategoriesAction = {
  collection?: Category[];
  type: 'SET_CATEGORIES' | 'RESET';
};

export type CategoriesState = {
  [key: string]: Category;
};

export const categoriesReducer = (
  state: CategoriesState | null = null,
  action: CategoriesAction,
) => {
  const { collection, type } = action;

  switch (type) {
    case 'SET_CATEGORIES': {
      return collection!.reduce(
        (prev, curr) => ({ ...prev, [curr._id as string]: curr }),
        {} as CategoriesState,
      );
    }

    case 'RESET': {
      return null;
    }

    default: {
      return state;
    }
  }
};
