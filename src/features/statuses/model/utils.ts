import { PRIORITIES } from './constants';

import { StatusCode, StatusInfo } from './types';

const getStatusInfoByCode = (status: StatusCode): StatusInfo => {
  switch (status) {
    case 0: {
      return { color: 'high-priority', text: PRIORITIES.HIGH };
    }
    case 1: {
      return { color: 'average-priority', text: PRIORITIES.AVERAGE };
    }
    case 2: {
      return { color: 'medium-priority', text: PRIORITIES.MEDIUM };
    }

    default: return { color: 'low-priority', text: PRIORITIES.LOW };
  }
};

export { getStatusInfoByCode };
