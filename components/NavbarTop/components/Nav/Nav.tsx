import * as React from 'react';
import { Menu as MenuIcon, Search as SearchIcon } from 'iconoir-react';
import IconButton from '@components/IconButton';
import Button from '@components/Button';
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

      {showSearch && <Search handleClose={handleToggleSearch} />}
      {showMenu && <Menu handleClose={handleToggleMenu} />}
    </>
  );
}
