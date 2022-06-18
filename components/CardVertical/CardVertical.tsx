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
        <Image
          width="150"
          height="225"
          className={styles.image}
          src={data.poster_path ? `https://image.tmdb.org/t/p/w154/${data.poster_path}` : posterPlaceholder}
          alt=""
        />

        <div className="title">{data.name || data.title}</div>
      </button>

      {showDetails && <DetailsOverlay handleClose={handleToggleDetails} data={data} />}
    </>
  );
}
