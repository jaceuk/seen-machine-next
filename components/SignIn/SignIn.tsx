import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Google, Mail } from 'iconoir-react';
import styles from './SignIn.module.scss';
import Button from '@components/Button';
import Alert from '@components/Alert';
import HeaderNoAuth from '@components/HeaderNoAuth';

interface SigninProps {
  csrfToken: string;
}

export default function Signin({ csrfToken }: SigninProps) {
  const router = useRouter();
  const query = router.query;

  return (
    <main className="no-auth main">
      <HeaderNoAuth />

      <div className="text">
        <h1>Sign in</h1>
        <p>We use passwordless sign in so you won&apos;t need to remember another pesky password!.</p>
        {query.error && <Alert type="error">There was a problem trying to sign you in, plesase try again.</Alert>}
      </div>

      <div className={styles.providers}>
        <button onClick={() => signIn('google')}>
          <Button active>
            <Google />
            Sign in with Google
          </Button>
        </button>
        <hr className={styles.hr} />
        <form className={styles.form} method="post" action="/api/auth/signin/email">
          <div className="form-field">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <button type="submit">
            <Button>
              <Mail />
              Sign in with Email
            </Button>
          </button>
        </form>
      </div>
    </main>
  );
}
