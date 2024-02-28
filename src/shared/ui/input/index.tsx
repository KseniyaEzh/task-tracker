import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface InputProps {
  value: string | number | readonly string[] | undefined,
  placeholder?: string,
  onChange(event): void,
  className?: string,
  icon?: ReactNode | null,
}

const Input = ({
  value,
  placeholder,
  onChange,
  className = '',
  icon = null,
}: InputProps) => {
  const inputStyles = [styles.input];

  if (className) {
    inputStyles.push(className);
  }

  return (
    <div className={ styles.wrapper }>
      <input
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
        className={ inputStyles.join(' ') }
      />
      <div className={ styles.icon }>
        { icon }
      </div>
    </div>
  );
};

export { Input };