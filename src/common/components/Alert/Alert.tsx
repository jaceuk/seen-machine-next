import styles from './Alert.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'error';
}

export default function Alert({ children, type }: ButtonProps) {
  return (
    <div role={type === 'error' && 'alert'} className={`${styles.alert} ${type === 'error' && styles.error}`}>
      {children}
    </div>
  );
}
