import Button from '@components/Button';
import { signIn } from 'next-auth/react';
import { Google, Mail } from 'iconoir-react';
import styles from './SignIn.module.scss';
import LogoLink from '@components/LogoLink';

interface SigninProps {
  csrfToken: string;
}

export default function Signin({ csrfToken }: SigninProps) {
  return (
    <>
      <main className={styles.main}>
        <LogoLink />

        <div className={styles.text}>
          <h1>Sign in</h1>
          <p>We use passwordless sign in so you won&apos;t need to remember another pesky password!.</p>
        </div>
      </main>
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
    </>
  );
}
