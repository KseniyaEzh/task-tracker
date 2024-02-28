import { Header } from 'entities/header';

import { SearchAndFilters } from 'widgets/search-and-filters';

import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={ styles.wrapper }>
      <Header />
      <SearchAndFilters />
    </div>
  );
};

export default MainPage;
