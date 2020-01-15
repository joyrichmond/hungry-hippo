import { mockCategories } from '../mock-data/mockCategories';
import { mockTransactions, mockTransactionsState } from '../mock-data/mockTransactions';
import { filterTransactions, getTotalSpent } from './transactions-service';

test('returns existing transactions that match requested category and date range', () => {
  const mockSelectedMonth = { monthStart: new Date('12/1/2019'), monthEnd: new Date('12/31/2019') };
  const mockFilteredTransactions = filterTransactions(mockTransactionsState(), mockSelectedMonth, Object.values(mockCategories)[0]);

  expect(mockFilteredTransactions).toEqual([
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
  ]);
});

test('sums amount in transaction history', () => {
  expect(getTotalSpent(mockTransactions)).toBe(264);
});
