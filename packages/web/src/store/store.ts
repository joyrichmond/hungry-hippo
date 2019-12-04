import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root';

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(),
);

export default store;
