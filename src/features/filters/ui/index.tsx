import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CheckIcon from '@mui/icons-material/Check';

import { filtersStore } from 'features/filters';

import { Button } from 'shared/ui';

import styles from './styles.module.scss';

const Filters = observer(() => {
  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    filtersStore.getFilters();
  }, []);

  const handleChangeFilterStatus = (idx: number) => {
    if (!active.includes(idx)) {
      return setActive((prevState) => [...prevState, idx]);
    }

    return setActive(active.filter(value => value !== idx));
  };

  const renderFilters = () => filtersStore.filtersList.map(({ name }, idx) => {
    const filterStyle = !active.includes(idx) ?
      styles.filter :
      `${styles.filter} ${styles.active}`;
    const icon = active.includes(idx) ? (
      <CheckIcon fontSize='small' />
    ) : null;

    return (
      <Button
        key={ idx }
        height='20px'
        onClick={ () => handleChangeFilterStatus(idx) }
        className={ filterStyle }
      >
        { icon }
        { name }
      </Button>
    );
  });

  return (
    <div className={ styles.wrapper }>
      { renderFilters() }
    </div>
  );
});

export { Filters };
