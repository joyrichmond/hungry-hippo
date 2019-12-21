export const getTotalSpent = transactionHistory =>
  transactionHistory && Object.values(transactionHistory).reduce(summate, 0);

const summate = (sum, object) => sum + object.amount;
