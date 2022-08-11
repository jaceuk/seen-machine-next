import { motion, Variants } from 'framer-motion';
import Overlay from '@components/Overlay';
import styles from './SideBar.module.scss';

interface SideBarProps {
  children: JSX.Element;
  handleClose: () => void;
}

const cardVariants: Variants = {
  offscreen: {
    x: 50,
  },
  onscreen: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function SideBar({ handleClose, children }: SideBarProps) {
  return (
    <Overlay>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <div className={styles.container}>
          <div className={styles.clickable} onClick={handleClose}></div>
          <div className={styles.contents}>{children}</div>
        </div>
      </motion.div>
    </Overlay>
  );
}
