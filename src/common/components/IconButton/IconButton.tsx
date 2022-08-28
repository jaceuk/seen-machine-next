import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

export default function IconButton({ children, active }: Props) {
  return <span className={`${styles.button} ${active ? styles.active : ''}`}>{children}</span>;
}
