import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { ImageButton, IconButton } from 'shared/ui';
import img from 'shared/assets/253.jpeg';

import styles from './styles.module.scss';

const Panel = () => {
  const handleToAccount = () => {

  };

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.avatar }>
        <div className={ styles.image }>
          <ImageButton
            img={ img }
            width='50px'
            onClick={ handleToAccount }
          />
        </div>
        <div className={ styles.icon }>
          <IconButton
            width='50px'
            children={ <HomeOutlinedIcon sx={{ fontSize: 30 }} /> }
          />
        </div>
        <div className={ styles.icon }>
          <IconButton
            width='50px'
            children={ <SettingsOutlinedIcon sx={{ fontSize: 30 }} /> }
          />
        </div>
      </div>
      <div className={ styles.exit }>
        <IconButton
          width='50px'
          children={ <ExitToAppOutlinedIcon sx={{ fontSize: 30 }} /> }
        />
      </div>
    </div>
  );
};

export { Panel };
