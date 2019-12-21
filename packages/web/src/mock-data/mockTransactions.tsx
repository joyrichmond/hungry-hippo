import { TransactionsState } from '../store/transactions';

export const mockTransactions = [
  {
    _id: 'TEST_TRANSACTION1',
    date: new Date('12-05-2019'),
    amount: 99,
    vendor: 'anyplace',
    categoryId: 'TEST_CATEGORY1',
  },
  {
    _id: 'TEST_TRANSACTION2',
    date: new Date('12-07-2019'),
    amount: 88,
    vendor: 'the place',
    categoryId: 'TEST_CATEGORY1',
  },
  {
    _id: 'TEST_TRANSACTION3',
    date: new Date('12-05-2019'),
    amount: 77,
    vendor: 'that place',
    categoryId: 'TEST_CATEGORY2',
  },
];

export const mockTransactionsState = () =>
  mockTransactions.reduce(
    (prev, curr) => ({
      ...prev,
      [curr._id as string]: curr,
    }),
    {} as TransactionsState,
  );
