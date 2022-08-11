import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  children: React.ReactNode;
}

export default function Overlay({ children }: OverlayProps) {
  return createPortal(
    <FocusTrap>
      <div className={styles.overlay}>{children}</div>
    </FocusTrap>,
    document.body,
  );
}
