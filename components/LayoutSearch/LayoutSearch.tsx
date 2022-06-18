import styles from './LayoutSearch.module.css';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="wrapper">
      <main className={styles.main}>{children}</main>
    </div>
  );
}
