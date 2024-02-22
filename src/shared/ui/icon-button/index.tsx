import styles from './styles.module.scss';

const IconButton = ({
  width,
  children,
}) => {
  return (
    <button
      className={ styles.wrapper }
      style={{ width: width, height: width }}
    >
      { children }
    </button>
  );
};

export { IconButton };
