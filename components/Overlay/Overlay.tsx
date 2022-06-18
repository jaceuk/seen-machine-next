import FocusTrap from 'focus-trap-react';
import styles from './Overlay.module.css';

interface IChildren {
  children: React.ReactNode;
}

export default function Overlay({ children }: IChildren) {
  return (
    <FocusTrap>
      <div className={styles.overlay}>{children}</div>
    </FocusTrap>
  );
}
