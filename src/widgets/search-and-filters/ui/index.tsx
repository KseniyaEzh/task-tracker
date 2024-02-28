import { Filters } from 'features/filters';
import { SearchPanel } from 'features/search-panel';

import styles from './styles.module.scss';

const SearchAndFilters = () => {
  return (
    <div className={ styles.wrapper }>
      <SearchPanel />
      <Filters />
    </div>
  );
};

export { SearchAndFilters };
