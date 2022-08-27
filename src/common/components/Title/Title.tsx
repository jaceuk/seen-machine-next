import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  subtext?: string;
}

export default function Title({ title, subtext }: TitleProps) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {subtext && <p>{subtext}</p>}
    </div>
  );
}
