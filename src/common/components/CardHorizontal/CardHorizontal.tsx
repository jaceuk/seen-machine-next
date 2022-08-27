import * as React from 'react';
import Image from 'next/image';
import Details from '@components/DetailsSideBar';
import posterPlaceholder from '@images/posterPlaceholder.png';
import styles from './CardHorizontal.module.css';

interface CardHorizontalProps {
  data: any;
}

export default function CardHorizontal({ data }: CardHorizontalProps) {
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
            src={data.poster_path ? `https://image.tmdb.org/t/p/w92/${data.poster_path}` : posterPlaceholder}
            alt=""
          />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.title}>{data.name || data.title}</div>
          <div className={styles.releaseDate}>{data.release_date || data.first_air_date}</div>
        </div>
      </button>

      {showDetails && <Details handleClose={handleToggleDetails} data={data} />}
    </>
  );
}
