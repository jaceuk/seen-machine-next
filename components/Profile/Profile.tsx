import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import SideBar from '@components/SideBar';
import { NavArrowLeft } from 'iconoir-react';
import styles from './Profile.module.scss';

interface ProfileProps {
  handleClose: () => void;
}

export default function Profile({ handleClose }: ProfileProps) {
  const { data: session } = useSession();

  return (
    <SideBar handleClose={handleClose}>
      <>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={handleClose} aria-label="Back">
            <NavArrowLeft />
          </button>
          <h1>Profile</h1>
        </header>
        <main className={styles.main}>
          {Object.keys(session.user).map((item, index) => (
            <div key={index}>
              {item}: {session.user[item]}
            </div>
          ))}
          <button onClick={() => signOut()}>Sign out</button>
        </main>
      </>
    </SideBar>
  );
}
