import * as React from 'react';
import { Menu as MenuIcon, Search as SearchIcon } from 'iconoir-react';
import IconButton from '@components/IconButton';

import styles from './Nav.module.scss';
import SearchSideBar from '@components/SearchSideBar';
import MenuSideBar from '@components/MenuSideBar';

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
        <div className="hide-on-mobile" onClick={handleToggleMenu}>
          <button>
            <IconButton>
              <MenuIcon />
              <span className="sr-only">Menu</span>
            </IconButton>
          </button>
        </div>

        <div onClick={handleToggleSearch}>
          <button>
            <IconButton active>
              <SearchIcon />
              <span className="sr-only">Search</span>
            </IconButton>
          </button>
        </div>
      </nav>

      {showSearch && <SearchSideBar handleClose={handleToggleSearch} />}
      {showMenu && <MenuSideBar handleClose={handleToggleMenu} />}
    </>
  );
}
