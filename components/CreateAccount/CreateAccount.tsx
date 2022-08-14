import * as React from 'react';
import Button from '@components/Button';
import FormField from '@components/FormField';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './CreateAccount.module.scss';

export default function CreateAccount() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
            <h1>Create account</h1>

            <p>Please enter your name and email address.</p>

            <FormField onChange={handleChange} value={inputs.name} label="Name" id="name" type="text" />

            <FormField onChange={handleChange} value={inputs.email} label="Email address" id="email" type="email" />

            <p>Your password should be at least 8 characters long and contain at least 1 number.</p>

            <FormField onChange={handleChange} value={inputs.password} label="Password" id="password" type="password" />

            <FormField
              onChange={handleChange}
              value={inputs.confirmPassword}
              label="Confirm password"
              id="confirm-password"
              type="password"
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
