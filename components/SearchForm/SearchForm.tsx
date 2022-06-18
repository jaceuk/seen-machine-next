import * as React from 'react';
import { useRouter } from 'next/router';
import ArrowLeftSVG from '@components/svgs/ArrowLeftSVG';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const router = useRouter();
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    setTerm(new URLSearchParams(new URL(window.location.href).search).get('q') || '');
  }, []);

  function handleBack() {
    router.back();
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    router.replace(`/search?q=${term}`);
  }

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBack} aria-label="Back">
          <ArrowLeftSVG />
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            className={styles.input}
            value={term}
            onChange={handleChange}
            placeholder="Search TV shows &amp; movies"
          />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
      </header>
    </>
  );
}
