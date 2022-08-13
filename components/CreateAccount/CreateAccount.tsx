import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import { NavArrowLeft } from 'iconoir-react';
import styles from './CreateAccount.module.scss';
import AccountHeader from '@components/AccountHeader';
import Hero from './components/Hero';

export default function CreateAccount() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Create account</h1>
          <p>Please enter your name and email address.</p>
        </div>
      </main>
      <div className={styles.buttons}>
        <Link href="/">
          <a>
            <IconButton>
              <NavArrowLeft />
            </IconButton>
          </a>
        </Link>

        <Link href="/account/create">
          <a>
            <Button active>Create account</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
