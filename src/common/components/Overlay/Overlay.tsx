import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styles from './Overlay.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Overlay({ children }: Props) {
  return createPortal(
    <FocusTrap>
      <div className={styles.overlay}>{children}</div>
    </FocusTrap>,
    document.body,
  );
}
