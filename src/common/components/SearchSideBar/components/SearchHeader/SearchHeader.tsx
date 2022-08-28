import { NavArrowLeft, Search } from 'iconoir-react';
import styles from './SearchHeader.module.scss';

interface Props {
  handleClose: () => void;
  term: string;
  setTerm: (value: string) => void;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

export default function SearchHeader({ handleClose, term, setTerm, handleSubmit }: Props) {
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
          <button type="submit">
            <Search />
          </button>
        </form>
      </header>
    </>
  );
}
