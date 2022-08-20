import * as React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './ResetPassword.module.scss';

type FormValues = {
  email: string;
};

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <main className={styles.main}>
          <div className={styles.logo}>Seen Machine</div>
          <div className={styles.fields}>
            <h1>Reset password</h1>
            <p>Please enter your email address and password to sign in to your account.</p>

            <div className={`form-field ${errors?.email && 'error'}`}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', {
                  required: 'Please enter your email address',
                  pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' },
                })}
              ></input>
              {errors?.email && (
                <div className="message" role="alert">
                  {errors.email.message}
                </div>
              )}
            </div>
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
