import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Title from '@components/Title';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <Title title="Profile" subtext="Manage your friends and update your details" />

      <main>
        {Object.keys(session.user).map((item, index) => (
          <div key={index}>
            {item}: {session.user[item]}
          </div>
        ))}
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    </div>
  );
}
