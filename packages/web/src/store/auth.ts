import Auth from '../models/Auth';

type AuthAction = {
  item: Auth;
  type: 'SET_AUTH' | 'RESET';
};

export const authReducer = (state: Auth | null = null, action: AuthAction) => {
  const { item, type } = action;

  switch (type) {
    case 'SET_AUTH': {
      return { ...item };
    }

    case 'RESET': {
      return null;
    }

    default: {
      return state;
    }
  }
};
