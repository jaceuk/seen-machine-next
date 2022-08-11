import * as React from 'react';
import Image from 'next/image';
import Details from '@components/Details';
import posterPlaceholder from '/images/posterPlaceholder.png';
import styles from './CardVertical.module.scss';

interface CardVerticalProps {
  data: any;
}

export default function CardVertical({ data }: CardVerticalProps) {
  const [showDetails, setShowDetails] = React.useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <button className={styles.result} onClick={handleToggleDetails}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            className={styles.image}
            src={data.poster_path ? `https://image.tmdb.org/t/p/w154/${data.poster_path}` : posterPlaceholder}
            alt=""
          />
        </div>

        <div className={`small ${styles.title}`}>{data.name || data.title}</div>
      </button>

      {showDetails && <Details handleClose={handleToggleDetails} data={data} />}
    </>
  );
}
