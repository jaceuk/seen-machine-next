import * as React from 'react';
import Link from 'next/link';
import { User, Search as SearchIcon } from 'iconoir-react';
import Button from '@components/Button';
import styles from './NavSecondary.module.scss';
import Search from '@components/Search';

export default function NavSecondary() {
  const [showDetails, setShowDetails] = React.useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Link href="/profile">
            <a>
              <Button>
                <User />
                <span className="sr-only">Profile</span>
              </Button>
            </a>
          </Link>
        </div>

        <div className={styles.navItem} onClick={handleToggleDetails}>
          <a>
            <Button active>
              <SearchIcon />
              <span className="sr-only">Search</span>
            </Button>
          </a>
        </div>
      </nav>

      {showDetails && <Search handleClose={handleToggleDetails} />}
    </>
  );
}
