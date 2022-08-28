import styles from './Title.module.scss';

interface Props {
  title: string;
  subtext?: string;
}

export default function Title({ title, subtext }: Props) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {subtext && <p>{subtext}</p>}
    </div>
  );
}
