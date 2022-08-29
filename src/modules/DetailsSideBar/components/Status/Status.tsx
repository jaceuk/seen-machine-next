import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@components/Button';
import { Calendar, Minus, Plus, ThumbsUp } from 'iconoir-react';
import styles from './Status.module.scss';

export default function Status() {
  function handleClick() {
    toast.success('Added to watch list');
  }

  return (
    <div>
      <div className={`inner ${styles.container}`}>
        <div className={styles.message}>
          <div className="svg-container">
            <ThumbsUp />
          </div>
          <span className="hide-on-mobile">Recommended</span>
        </div>

        <button onClick={handleClick}>
          <Button>
            <div className="svg-container">
              <Plus />
            </div>
            Add to watch list
          </Button>
        </button>
      </div>

      <div className={styles.text}>Recommended by Jason Newington</div>

      {/* <div className={styles.container}>
        <div className={styles.message}>
          <div className="svg-container">
            <Calendar />
          </div>
          <span>On watch list</span>
        </div>

        <button onClick={handleClick}>
          <Button>
            <div className="svg-container">
              <Minus />
            </div>
            Remove<span className="hide-on-mobile"> from watch list</span>
          </Button>
        </button>
      </div> */}

      {/* <div className={styles.container}>
        <div className={styles.message}>
          <div className="svg-container">
            <Calendar />
          </div>
          <span>You&apos;ve watched this</span>
        </div>
      </div> */}
    </div>
  );
}
