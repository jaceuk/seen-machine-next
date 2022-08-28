import Button from '@components/Button';
import styles from './Recommend.module.scss';

export default function Recommend() {
  function handleClick() {
    alert('Recommendation sent');
  }

  return (
    <>
      <h3>Recommend to a friend</h3>

      <form className={styles.form}>
        <div className="form-field">
          <label htmlFor="friends">Choose a friend</label>
          <select name="friends" id="friends">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <button type="submit" onClick={handleClick}>
          <Button active>Send recommendation</Button>
        </button>
      </form>
    </>
  );
}
