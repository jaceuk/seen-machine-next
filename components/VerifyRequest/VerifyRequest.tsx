import { ArrowLeft } from 'iconoir-react';
import Link from 'next/link';
import styles from './VerifyRequest.module.scss';
import Button from '@components/Button';
import HeaderNoAuth from '@components/HeaderNoAuth';

export default function VerifyRequest() {
  return (
    <main className="no-auth main">
      <HeaderNoAuth />

      <div className="text">
        <h1>Verify request</h1>
        <div className="subtitle">Check your email</div>
        <p>A sign in link has been sent to your email address.</p>
        <p>If you don&apos;t receive an email please check your junk folder.</p>
        <p>If it&apos;s not there then please go back to the sign in page and try again.</p>
      </div>

      <Link href="/auth/signin">
        <a>
          <Button active>
            <ArrowLeft />
            Back to sign in
          </Button>
        </a>
      </Link>
    </main>
  );
}
