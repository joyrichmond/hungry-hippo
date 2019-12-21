import { format } from 'date-fns';
import React, { FC, useState } from 'react';

import { months } from '../data/dates';
import { useBudgets } from '../hooks/useCollection';
import { getBudgetYears } from '../services/get-years-array';
import Dropdown from './utils/Dropdown';

const Header: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), 'MMMM'),
  );
  const [selectedYear, setSelectedYear] = useState(format(new Date(), 'yyyy'));

  const budgets = useBudgets();
  const budgetsArray = Object.values(budgets);

  return (
    <div className="header flex-h flex-space-between">
      <span>Month</span>
      <div>
        <Dropdown
          value={selectedMonth}
          array={months}
          setStateFn={setSelectedMonth}
          defaultOption={format(new Date(), 'MMMM')}
        />
        <Dropdown
          value={selectedYear}
          array={getBudgetYears(budgetsArray)}
          setStateFn={setSelectedYear}
          defaultOption={format(new Date(), 'yyyy')}
        />
      </div>
    </div>
  );
};

export default Header;
