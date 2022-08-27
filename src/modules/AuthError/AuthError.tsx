import Button from '@components/Button';
import HeaderNoAuth from '@components/HeaderNoAuth';
import { ArrowLeft } from 'iconoir-react';
import Link from 'next/link';

export default function AuthError() {
  return (
    <div className="no-auth-page">
      <HeaderNoAuth />

      <div className="text">
        <h1>Oops</h1>
        <div className="subtitle">Something went wrong</div>
        <p>Please go back to the sign in page and try again.</p>
      </div>

      <Link href="/auth/signin">
        <a>
          <Button active>
            <ArrowLeft />
            Back to sign in
          </Button>
        </a>
      </Link>
    </div>
  );
}
