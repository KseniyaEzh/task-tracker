import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  width?: string,
  height?: string,
  children: ReactNode,
  className?: string,
  onClick(): void,
}

const Button = ({
  width = '100px',
  height = '50px',
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  const wrapperStyles = [styles.wrapper];

  if (className) {
    wrapperStyles.push(className);
  }

  return (
    <button
      onClick={ onClick }
      className={ wrapperStyles.join(' ') }
      style={{ width: width, height: height }}
    >
      { children }
    </button>
  );
};

export { Button };
