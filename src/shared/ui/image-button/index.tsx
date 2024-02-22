import styles from './styles.module.scss';

interface ImageButtonProps {
  img: string,
  width?: string,
  onClick(): void,
}

const ImageButton = ({
  img,
  width,
  onClick,
}: ImageButtonProps) => {
  return (
    <button
      onClick={ onClick }
      className={ styles.wrapper }
      style={{
        width: width,
        height: width,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
      }}
    > 
    </button>
  );
};

export { ImageButton };
