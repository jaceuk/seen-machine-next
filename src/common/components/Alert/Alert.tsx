import styles from './Alert.module.scss';

interface Props {
  children: React.ReactNode;
  type: 'error';
}

export default function Alert({ children, type }: Props) {
  return (
    <div role={type === 'error' && 'alert'} className={`${styles.alert} ${type === 'error' && styles.error}`}>
      {children}
    </div>
  );
}
