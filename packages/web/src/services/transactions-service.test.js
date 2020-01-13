import { getTotalSpent } from './transactions-service';
import { mockTransactions } from '../mock-data/mockTransactions';

test('sums amount in transaction history', () => {
  expect(getTotalSpent(mockTransactions)).toBe(264);
});
