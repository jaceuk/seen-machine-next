import * as React from 'react';
import Button from '@components/Button';
import FormField from '@components/FormField';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './ResetPassword.module.scss';

export default function ResetPassword() {
  const [inputs, setInputs] = React.useState({
    email: '',
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
            <h1>Reset password</h1>
            <p>Please enter your email address and password to sign in to your account.</p>
            <FormField onChange={handleChange} value={inputs.email} label="Email address" id="email" type="email" />
          </div>
        </main>
        <div className={styles.buttons}>
          <Link href="/account/sign-in">
            <a>
              <IconButton>Cancel</IconButton>
            </a>
          </Link>

          <button type="submit">
            <Button active>Send instructions</Button>
          </button>
        </div>
      </form>
    </div>
  );
}
