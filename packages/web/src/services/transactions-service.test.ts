import { mockCategories } from '../mock-data/mockCategories';
import { mockTransactionsState } from '../mock-data/mockTransactions';
import { filterTransactions } from './transactions-service';

test('returns existing transactions that match requested category and date range', () => {
  const mockFilteredTransactions = filterTransactions(
    mockTransactionsState(),
    Object.values(mockCategories)[0],
  );

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
