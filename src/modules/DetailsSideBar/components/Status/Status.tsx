import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@components/Button';
import { Plus, ThumbsUp } from 'iconoir-react';
import styles from './Status.module.scss';

const notify = (text) => toast(text);

export default function Status() {
  function handleClick() {
    notify('Watch list updated');
  }

  return (
    <>
      <div className={styles.message}>
        <div className="svg-container">
          <ThumbsUp />
        </div>
        Recommended by Jason Newington
      </div>

      <button onClick={handleClick}>
        <Button>
          <Plus />
          Add to watch list
        </Button>
      </button>

      <ToastContainer />
    </>
  );
}
