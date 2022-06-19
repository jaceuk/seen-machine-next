import * as React from 'react';
import Image from 'next/image';
import DetailsOverlay from '@components/DetailsOverlay';
import posterPlaceholder from '/images/posterPlaceholder.png';
import styles from './CardVertical.module.css';

export default function CardVertical({ data }: { data: any }) {
  const [showDetails, setShowDetails] = React.useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
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

        <div className={`title ${styles.title}`}>{data.name || data.title}</div>
      </button>

      {showDetails && <DetailsOverlay handleClose={handleToggleDetails} data={data} />}
    </>
  );
}
