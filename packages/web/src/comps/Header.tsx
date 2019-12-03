import React, { FC, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { monthsTypeDate } from '../data/dates';
import Dropdown from './utils/Dropdown';
import { getBudgetYears } from '../services/get-years-array';
import { useBudgets } from '../hooks/useCollection';

const Header: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), 'MMMM'),
  );
  const [selectedYear, setSelectedYear] = useState(format(new Date(), 'yyyy'));
  const [canUserSelectMonth, setCanUserSelectMonth] = useState(false);
  const [canUserSelectYear, setCanUserSelectYear] = useState(false);

  const budgets = useBudgets();

  const handleSelectMonth = () => {
    setCanUserSelectMonth(!canUserSelectMonth);
  };

  const handleSelectYear = () => {
    setCanUserSelectYear(!canUserSelectYear);
  };

  return (
    <div>
      <div>
        {selectedMonth}
        <button onClick={handleSelectMonth}>
          <FontAwesomeIcon icon="chevron-down" />
        </button>
        {canUserSelectMonth && (
          <Dropdown array={monthsTypeDate} setStateFn={setSelectedMonth} />
        )}
      </div>
      <div>
        {selectedYear}
        <button onClick={handleSelectYear}>
          <FontAwesomeIcon icon="chevron-down" />
        </button>
        {canUserSelectYear && (
          <Dropdown
            array={getBudgetYears(budgets)}
            setStateFn={setSelectedYear}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
