import Budget from '../models/Budget';
import { request } from './api-service';

export const getBudgets = () =>
  request('budgets').then((res: any[]) =>
    res.map<Budget>(x => ({ ...x, effectiveDate: new Date(x.effectiveDate) })),
  );
