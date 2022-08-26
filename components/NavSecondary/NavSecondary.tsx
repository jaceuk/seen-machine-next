import * as React from 'react';
import { User, Search as SearchIcon } from 'iconoir-react';
import Button from '@components/IconButton';
import styles from './NavSecondary.module.scss';
import Search from '@components/Search';
import Profile from '@components/Profile';

export default function NavSecondary() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

  function handleToggleSearch() {
    setShowSearch(!showSearch);
    document.body.classList.toggle('no-scroll');
  }

  function handleToggleProfile() {
    setShowProfile(!showProfile);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navItem} onClick={handleToggleProfile}>
          <button>
            <Button>
              <User />
              <span className="sr-only">Profile</span>
            </Button>
          </button>
        </div>

        <div className={styles.navItem} onClick={handleToggleSearch}>
          <button>
            <Button active>
              <SearchIcon />
              <span className="sr-only">Search</span>
            </Button>
          </button>
        </div>
      </nav>

      {showSearch && <Search handleClose={handleToggleSearch} />}
      {showProfile && <Profile handleClose={handleToggleProfile} />}
    </>
  );
}
