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
          <span>Recommended by Jason Newington</span>
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

      {/* <div className={`inner ${styles.container}`}>
        <div className={styles.message}>
          <div className="svg-container">
            <Calendar />
          </div>
          <span>On your watch list</span>
        </div>

        <button onClick={handleClick}>
          <Button>
            <div className="svg-container">
              <Minus />
            </div>
            Remove from watch list
          </Button>
        </button>
      </div> */}

      {/* <div className={`inner ${styles.container}`}>
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
