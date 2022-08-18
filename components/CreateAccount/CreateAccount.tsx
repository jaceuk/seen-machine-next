import * as React from 'react';
import Button from '@components/Button';
import FormField from '@components/FormField';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './CreateAccount.module.scss';
import useAccountForm from '@hooks/useAccountForm';

export default function CreateAccount() {
  const [inputValues, handleChange, handleBlur, inputErrors] = useAccountForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <main className={styles.main}>
          <div className={styles.logo}>Seen Machine</div>
          <div className={styles.fields}>
            <h1>Create account</h1>

            <p>Please enter your name and email address.</p>

            <FormField
              onChange={handleChange}
              value={inputValues.name}
              label="Name"
              id="name"
              type="text"
              onBlur={handleBlur}
              error={inputErrors.name && 'Please enter your name'}
            />

            <FormField
              onChange={handleChange}
              value={inputValues.email}
              label="Email address"
              id="email"
              type="email"
              onBlur={handleBlur}
              error={inputErrors.email && 'Please enter your email address'}
            />

            <p>Your password should be at least 8 characters long and contain at least 1 number.</p>

            <FormField
              onChange={handleChange}
              value={inputValues.password}
              label="Password"
              id="password"
              type="password"
              onBlur={handleBlur}
              error={inputErrors.password && 'Please enter your password'}
            />

            <FormField
              onChange={handleChange}
              value={inputValues.confirmPassword}
              label="Confirm password"
              id="confirmPassword"
              type="password"
              onBlur={handleBlur}
              error={inputErrors.confirmPassword && 'Please enter your email address'}
            />
          </div>
        </main>
        <div className={styles.buttons}>
          <Link href="/">
            <a>
              <IconButton>Cancel</IconButton>
            </a>
          </Link>

          <button type="submit">
            <Button active>Create account</Button>
          </button>
        </div>
      </form>
    </div>
  );
}
