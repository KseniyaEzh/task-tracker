import { PRIORITIES } from './constants';

type StatusCode = 0 | 1 | 2 | 3;

interface StatusInfo {
  color: string,
  text: PRIORITIES,
}

export type { StatusCode, StatusInfo };
