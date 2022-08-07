import styles from './Button.module.scss';

interface IChildren {
  children: React.ReactNode;
  active?: boolean;
}

export default function Button({ children, active }: IChildren) {
  return <span className={`${styles.button} ${active ? styles.active : ''}`}>{children}</span>;
}
