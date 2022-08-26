import * as React from 'react';
import { Menu as MenuIcon, Search as SearchIcon } from 'iconoir-react';
import Button from '@components/IconButton';
import styles from './Nav.module.scss';
import Search from '@components/Search';
import Menu from '@components/Menu';

export default function Nav() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  function handleToggleSearch() {
    setShowSearch(!showSearch);
    document.body.classList.toggle('no-scroll');
  }

  function handleToggleMenu() {
    setShowMenu(!showMenu);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={`${styles.navItem} hide-on-mobile`} onClick={handleToggleMenu}>
          <button>
            <Button>
              <MenuIcon />
              <span className="sr-only">Menu</span>
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
      {showMenu && <Menu handleClose={handleToggleMenu} />}
    </>
  );
}
