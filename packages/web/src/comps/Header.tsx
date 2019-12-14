import { format } from 'date-fns';
import React, { FC, useState } from 'react';

import { months } from '../data/dates';
import { getBudgetYears } from '../services/get-years-array';
import Dropdown from './utils/Dropdown';

//import { useBudgets } from '../hooks/useCollection';

const Header: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), 'MMMM'),
  );
  const [selectedYear, setSelectedYear] = useState(format(new Date(), 'yyyy'));

  const budgets = [] as any; //useBudgets();

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
          array={getBudgetYears(budgets)}
          setStateFn={setSelectedYear}
          defaultOption={format(new Date(), 'yyyy')}
        />
      </div>
    </div>
  );
};

export default Header;
