import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function Button({ children, active }: ButtonProps) {
  return <span className={`${styles.button} ${active ? styles.active : ''}`}>{children}</span>;
}
