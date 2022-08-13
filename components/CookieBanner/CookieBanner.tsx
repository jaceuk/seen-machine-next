import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from '@components/Button';
import styles from './CookieBanner.module.scss';

const variants: Variants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

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
        <motion.div
          className={styles.container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variants}
        >
          <p>
            This website uses cookies for analytical purposes. By continuing to use this website you are indicating that
            you are happy with this.
          </p>
          <button onClick={handleAccept}>
            <Button active>Accept</Button>
          </button>
        </motion.div>
      )}
    </>
  );
}
