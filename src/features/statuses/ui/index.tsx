import {
  getStatusInfoByCode,
  StatusCode,
} from 'features/statuses';

import styles from './styles.module.scss';

interface StatusesProps {
  statusCode: StatusCode,
}

const Statuses = ({ statusCode }: StatusesProps) => {
  const { color, text } = getStatusInfoByCode(statusCode);

  return (
    <div className={ styles.wrapper }>
      <div className={ styles[`point_${color}`] }></div>
      <div className={ styles.test }>{ text }</div>
    </div>
  );
};

export { Statuses };
