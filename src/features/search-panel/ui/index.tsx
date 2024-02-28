import SearchIcon from '@mui/icons-material/Search';

import { observer } from 'mobx-react-lite';

import { Input } from 'shared/ui';

import { searchStore } from 'features/search-panel';

import styles from './styles.module.scss';

const SearchPanel = observer(() => {
  const handleChangeInput = ({ target: { value } }) => {
    searchStore.setSearchValue(value);
  };

  return (
    <div className={ styles.wrapper }>
      <Input
        value={ searchStore.searchValue }
        placeholder='Search'
        onChange={ handleChangeInput }
        className={ styles.search }
        icon={ <SearchIcon /> }
      />
    </div>
  );
});

export { SearchPanel };
