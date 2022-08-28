import Button from '@components/Button';
import { Plus } from 'iconoir-react';
import styles from './AddToHistory.module.scss';

export default function AddToHistory() {
  function handleClick() {
    alert('Added to watch history');
  }

  return (
    <>
      <h3>Have you watched this?</h3>

      <form className={styles.form}>
        <div className={styles.selects}>
          <div className={styles.select}>
            <div className="form-field">
              <label htmlFor="seasons">Season</label>
              <select name="seasons" id="seasons">
                <option value="volvo">All seasons</option>
                <option value="saab">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            </div>
          </div>

          <div className={styles.select}>
            <div className="form-field">
              <label htmlFor="episodes">Episode</label>
              <select name="episodes" id="episodes">
                <option value="volvo">All episodes</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" onClick={handleClick}>
          <Button>
            <Plus />
            Add to watch history
          </Button>
        </button>
      </form>
    </>
  );
}
