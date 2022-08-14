import * as React from 'react';
import Link from 'next/link';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import FormField from '@components/FormField';
import styles from './SignIn.module.scss';

export default function SignIn() {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputs);
  }

  const handleChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <main className={styles.main}>
          <div className={styles.logo}>Seen Machine</div>

          <div className={styles.fields}>
            <h1>Sign in</h1>

            <p>Please enter your email address and password to sign in to your account.</p>

            <FormField onChange={handleChange} value={inputs.email} label="Email address" id="email" type="email" />

            <FormField onChange={handleChange} value={inputs.password} label="Password" id="password" type="password" />

            <Link href="/account/reset-password">
              <a className={styles.link}>Forgotten your password?</a>
            </Link>
          </div>
        </main>
        <div className={styles.buttons}>
          <Link href="/">
            <a>
              <IconButton>Cancel</IconButton>
            </a>
          </Link>

          <button type="submit">
            <Button active>Sign in</Button>
          </button>
        </div>
      </form>
    </div>
  );
}
