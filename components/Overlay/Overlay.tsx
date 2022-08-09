import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styles from './Overlay.module.scss';

interface IChildren {
  children: React.ReactNode;
}

export default function Overlay({ children }: IChildren) {
  return createPortal(
    <FocusTrap>
      <div className={styles.overlay}>{children}</div>
    </FocusTrap>,
    document.body,
  );
}
