import styles from './Button.module.scss';

interface IChildren {
  children: React.ReactNode;
  active?: boolean;
}

export default function Button({ children, active }: IChildren) {
  return <button className={`${styles.button} ${active ? styles.active : ''}`}>{children}</button>;
}
