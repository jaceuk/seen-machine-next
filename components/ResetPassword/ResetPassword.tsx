import * as React from 'react';
import Button from '@components/Button';
import FormField from '@components/FormField';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './ResetPassword.module.scss';
import useAccountForm from '@hooks/useAccountForm';

export default function ResetPassword() {
  const [inputValues, handleChange, handleBlur, inputErrors] = useAccountForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <main className={styles.main}>
          <div className={styles.logo}>Seen Machine</div>
          <div className={styles.fields}>
            <h1>Reset password</h1>
            <p>Please enter your email address and password to sign in to your account.</p>
            <FormField
              onChange={handleChange}
              value={inputValues.email}
              label="Email address"
              id="email"
              type="email"
              onBlur={handleBlur}
              error={inputErrors.email && 'Please enter your email address'}
            />
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
