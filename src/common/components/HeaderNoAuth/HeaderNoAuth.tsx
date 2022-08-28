import * as React from 'react';
import { QuestionMarkCircle } from 'iconoir-react';
import LogoLink from '@components/LogoLink';
import Button from '@components/Button';
import styles from './HeaderNoAuth.module.scss';
import Help from '@components/HelpSideBar';

export default function HeaderNoAuth() {
  const [showHelp, setShowHelp] = React.useState(false);

  function handleToggleDetails() {
    setShowHelp(!showHelp);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <header className={styles.header}>
        <LogoLink />

        <button onClick={handleToggleDetails}>
          <Button>
            <QuestionMarkCircle />
            Help
          </Button>
        </button>
      </header>

      {showHelp && <Help handleClose={handleToggleDetails} />}
    </>
  );
}
