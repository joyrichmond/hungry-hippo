export const getTotalSpent = transactionHistory =>
  transactionHistory.reduce(summate, 0);

const summate = (sum, object) => sum + object.amount;
