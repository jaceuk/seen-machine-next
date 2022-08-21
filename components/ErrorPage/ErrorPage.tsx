import Button from '@components/Button';
import HeaderNoAuth from '@components/HeaderNoAuth';
import { Home } from 'iconoir-react';
import Link from 'next/link';
import styles from './ErrorPage.module.scss';

interface ErrorProps {
  type: string;
  message: string;
}

export default function ErrorPage({ type, message }: ErrorProps) {
  return (
    <main className="no-auth main">
      <HeaderNoAuth />

      <div className="text">
        <h1>{type}</h1>
        <div className="subtitle">{message}</div>
      </div>

      <Link href="/auth/signin">
        <a>
          <Button active>
            <Home />
            Home
          </Button>
        </a>
      </Link>
    </main>
  );
}
