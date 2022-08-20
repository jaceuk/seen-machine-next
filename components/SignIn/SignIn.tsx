import Button from '@components/Button';
import { signIn } from 'next-auth/react';
import { GoogleCircled, Mail } from 'iconoir-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SignIn.module.scss';

interface FormInput {
  email: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<FormInput> = () => signIn('email');

  function handleClick() {
    signIn('google');
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Recommend TV shows and movies to your friends</h1>
          <div className={styles.subtitle}>and keep track of what you&apos;ve watched</div>
        </div>
      </main>
      <div className={styles.buttons}>
        <button onClick={handleClick}>
          <Button>
            <GoogleCircled />
            Sign in with Google
          </Button>
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`form-field ${errors.email && 'error'}`}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="text"
              {...register('email', {
                required: 'Please enter your email address',
                pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' },
              })}
            />
            {errors?.email && <div className="message">{errors?.email.message}</div>}
            <button>
              <Button active>
                <Mail />
                Sign in with email
              </Button>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
