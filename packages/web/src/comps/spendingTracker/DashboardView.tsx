import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCategories } from '../../hooks/useCollection';
import Transaction from '../../models/Transaction';
import { addTransaction } from '../../services/transactions-service';
import { AppState } from '../../store/root';
import RecordTransaction from './RecordTransaction';

const DashboardView: FC = () => {
  const selectedCategory = useSelector(
    (state: AppState) => state.selectedCategory,
  );
  const categories = useCategories();
  const dispatch = useDispatch();

  const setTransaction = (transaction: Omit<Transaction, '_id'>) => {
    addTransaction(transaction).then(item =>
      dispatch({ type: 'ADD_TRANSACTION', item }),
    );
  };

  const getCategory = (categoryId: string | null) =>
    categories
      ? Object.values(categories).find(
          category => categoryId === category._id,
        ) || undefined
      : undefined;

  return (
    <RecordTransaction
      category={getCategory(selectedCategory)}
      setTransaction={setTransaction}
    />
  );
};

export default DashboardView;
