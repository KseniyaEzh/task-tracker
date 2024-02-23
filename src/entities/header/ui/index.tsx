import { getToday, formatDate, PATTERNS } from 'entities/header/models';

import { Button } from 'shared/ui';

import styles from './styles.module.scss';

const Header = () => {
  const getDateToday = formatDate(getToday, PATTERNS.DAY_MONTH_STRING);

  const handleOpenShareModel = () => {};

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.date }>
        <div className={ styles.today }>Today</div>
        <div>{ getDateToday }</div>
      </div>
      <div>
        <Button
          width='80px'
          height='20px'
          className={ styles.share }
          onClick={ handleOpenShareModel }
        >
          Share
        </Button>
      </div>
    </div>
  );
};

export { Header };
