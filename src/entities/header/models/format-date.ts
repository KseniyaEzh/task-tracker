import { format } from '@formkit/tempo';

const PATTERNS = {
  DEFAULT_DATE: 'YYYY-MM-DD',
  DAY_MONTH_STRING: 'dddd D of MMMM',
};

const getToday = new Date();

const formatDate = (date: Date | string, pattern = PATTERNS.DEFAULT_DATE): string =>
  format(date, pattern, 'en');

export {
  PATTERNS, 
  getToday,
  formatDate
};
