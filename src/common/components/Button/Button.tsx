import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

export default function Button({ children, active }: Props) {
  return <span className={`${styles.button} ${active ? styles.active : ''}`}>{children}</span>;
}
