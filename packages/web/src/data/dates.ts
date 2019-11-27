import { parse } from 'date-fns';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthsTypeDate = months.map(month =>
  parse(month, 'MMMM', new Date()),
);
