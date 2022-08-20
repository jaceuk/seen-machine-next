import * as React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './CreateAccount.module.scss';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function CreateAccount() {
  const {
    register,
    watch,
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
            <h1>Create account</h1>

            <p>Please enter your name and email address.</p>

            <div className={`form-field ${errors?.name && 'error'}`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', { required: 'Please enter your name' })}
              ></input>
              {errors?.name && (
                <div className="message" role="alert">
                  {errors.name.message}
                </div>
              )}
            </div>

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

            <p>Your password should be at least 8 characters long.</p>

            <div className={`form-field ${errors?.password && 'error'}`}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                aria-invalid={errors.password ? 'true' : 'false'}
                {...register('password', {
                  required: 'Please choose a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                })}
              ></input>
              {errors?.password && (
                <div className="message" role="alert">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className={`form-field ${errors?.confirmPassword && 'error'}`}>
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                type="password"
                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return 'Your passwords do no match';
                    }
                  },
                })}
              ></input>
              {errors?.confirmPassword && (
                <div className="message" role="alert">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
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
