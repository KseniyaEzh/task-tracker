import { Header } from 'entities/header';

import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={ styles.wrapper }>
      <Header />
    </div>
  );
};

export default MainPage;
