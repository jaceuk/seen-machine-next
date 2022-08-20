import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import styles from './SignIn.module.scss';

type FormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
  console.log(errors);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <main className={styles.main}>
          <div className={styles.logo}>Seen Machine</div>

          <div className={styles.fields}>
            <h1>Sign in</h1>

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

            <div className={`form-field ${errors?.password && 'error'}`}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                aria-invalid={errors.password ? 'true' : 'false'}
                {...register('password', { required: 'Please enter your password' })}
              ></input>
              {errors?.password && (
                <div className="message" role="alert">
                  {errors.password.message}
                </div>
              )}
            </div>

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
