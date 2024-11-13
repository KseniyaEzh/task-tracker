import { Header } from 'entities/header';

import { SearchAndFilters } from 'widgets/search-and-filters';
import { AllColumnsTasks } from 'widgets/all-columns-tasks';

import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={ styles.wrapper }>
      <Header />
      <div className={ styles.info }>
        <SearchAndFilters />
        <AllColumnsTasks />
      </div>
    </div>
  );
};

export default MainPage;
