import * as React from 'react';
import Image from 'next/image';
import DetailsOverlay from '@components/DetailsOverlay';
import posterPlaceholder from '/images/posterPlaceholder.png';
import styles from './CardHorizontal.module.css';

export default function CardHorizontal({ data }: { data: any }) {
  const [showDetails, setShowDetails] = React.useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }

  console.log(data);

  return (
    <>
      <button className={styles.result} onClick={handleToggleDetails}>
        <div className={styles.imageContainer}>
          <Image
            width={92}
            height={138}
            layout="fill"
            className={styles.image}
            src={data.poster_path ? `https://image.tmdb.org/t/p/w92/${data.poster_path}` : posterPlaceholder}
            alt=""
          />
        </div>

        <div className={styles.textContainer}>
          <h2 className="title">{data.name || data.title}</h2>
          <div className={styles.releaseDate}>{data.release_date || data.first_air_date}</div>
        </div>
      </button>

      {showDetails && <DetailsOverlay handleClose={handleToggleDetails} data={data} />}
    </>
  );
}
