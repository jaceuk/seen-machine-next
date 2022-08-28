import Button from '@components/Button';
import { NavArrowDown } from 'iconoir-react';
import styles from './Recommend.module.scss';

const friends = [
  { id: 1, name: 'Jason Newington' },
  { id: 2, name: 'Michael Salanson' },
  { id: 3, name: 'Fred Bigsby' },
];

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
            {friends.map((friend) => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment"></textarea>
        </div>

        <button type="submit" onClick={handleClick}>
          <Button active>Send recommendation</Button>
        </button>
      </form>
    </>
  );
}
