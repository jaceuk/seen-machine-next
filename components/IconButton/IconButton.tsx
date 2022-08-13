import styles from './IconButton.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function IconButton({ children, active }: ButtonProps) {
  return <span className={`${styles.button} ${active ? styles.active : ''}`}>{children}</span>;
}
