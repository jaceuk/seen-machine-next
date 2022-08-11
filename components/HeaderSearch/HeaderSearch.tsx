import { NavArrowLeft } from 'iconoir-react';
import styles from './SearchForm.module.css';

interface HeaderSearchProps {
  handleClose: () => void;
  term: string;
  setTerm: (value: string) => void;
  handleSubmit: (event: any) => void;
}

export default function HeaderSearch({ handleClose, term, setTerm, handleSubmit }: HeaderSearchProps) {
  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleClose} aria-label="Back">
          <NavArrowLeft />
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
