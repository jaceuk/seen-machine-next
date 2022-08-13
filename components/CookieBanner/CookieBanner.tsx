import * as React from 'react';
import Button from '@components/Button';
import styles from './CookieBanner.module.scss';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = React.useState(false);

  function handleAccept() {
    setCookieConsent(!cookieConsent);
  }

  React.useEffect(() => {
    const consent = JSON.parse(localStorage.getItem('cookieConsent') || '{}');
    setCookieConsent(consent.value);
  }, []);

  React.useEffect(() => {
    if (cookieConsent) {
      const consent = { value: true, timestamp: new Date().getTime() };
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
    }
  }, [cookieConsent]);

  return (
    <>
      {!cookieConsent && (
        <div className={styles.container}>
          <p>
            This website uses cookies for analytical purposes. By continuing to use this website you are indicating that
            you are happy with this.
          </p>
          <button onClick={handleAccept}>
            <Button active>Accept</Button>
          </button>
        </div>
      )}
    </>
  );
}
