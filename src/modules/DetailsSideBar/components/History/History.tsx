import styles from './History.module.scss';

export default function History() {
  return (
    <div className={styles.container}>
      <h3>Watch history</h3>

      <table className={styles.table}>
        <tr>
          <th>Season</th>
          <th>Episode</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>

        <tr>
          <td>1</td>
          <td>1</td>
          <td>12th August 2022</td>
          <td>
            <button>Remove</button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>12th August 2022</td>
          <td>
            <button>Remove</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
