import { getTotalSpent } from './get-total-spent';
import { mockTransactionHistory } from '../mock-data/mockTransactionHistory';

test('sums amount in transaction history', () => {
  expect(getTotalSpent(mockTransactionHistory)).toBe(264);
});
