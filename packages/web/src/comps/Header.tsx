import { format } from 'date-fns';
import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { months } from '../data/dates';
import { getBudgetYears } from '../services/get-years-array';
import Dropdown from './utils/Dropdown';

//import { useBudgets } from '../hooks/useCollection';

const Header: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), 'MMMM'),
  );
  const [selectedYear, setSelectedYear] = useState(format(new Date(), 'yyyy'));
  const [canUserSelectMonth, setCanUserSelectMonth] = useState(false);
  const [canUserSelectYear, setCanUserSelectYear] = useState(false);

  const budgets = [] as any; //useBudgets();

  const handleSelectMonth = () => {
    setCanUserSelectMonth(!canUserSelectMonth);
  };

  const handleSelectYear = () => {
    setCanUserSelectYear(!canUserSelectYear);
  };

  return (
    <div>
      <Dropdown
        array={months}
        setStateFn={setSelectedMonth}
        defaultOption={format(new Date(), 'MMMM')}
      />
      <Dropdown
        array={getBudgetYears(budgets)}
        setStateFn={setSelectedYear}
        defaultOption={format(new Date(), 'yyyy')}
      />
    </div>
  );
};

export default Header;
