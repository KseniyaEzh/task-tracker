import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { ImageButton, Button } from 'shared/ui';
import img from 'shared/assets/253.jpeg';

import styles from './styles.module.scss';

const Panel = () => {
  const handleToAccount = () => {

  };

  const handleGoToHome = () => {

  };

  const handleGoToSettings = () => {
    
  };

  const handleExit = () => {

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
          <Button
            width='50px'
            height='50px'
            onClick={ handleGoToHome }
            className={ styles.button }
            children={ <HomeOutlinedIcon sx={{ fontSize: 30 }} /> }
          />
        </div>
        <div className={ styles.icon }>
          <Button
            width='50px'
            height='50px'
            onClick={ handleGoToSettings }
            className={ styles.button }
            children={ <SettingsOutlinedIcon sx={{ fontSize: 30 }} /> }
          />
        </div>
      </div>
      <div className={ styles.exit }>
        <Button
          width='50px'
          height='50px'
          onClick={ handleExit }
          className={ styles.button }
          children={ <ExitToAppOutlinedIcon sx={{ fontSize: 30 }} /> }
        />
      </div>
    </div>
  );
};

export { Panel };
