import * as React from 'react';
import Recommend from '../Recommend';
import Track from '../Track';
import History from '../History';
import styles from './TabGroup.module.scss';

export default function TabGroup() {
  const [selectedTab, setSelectedTab] = React.useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.tablist} role="tablist" aria-orientation="horizontal">
        <button
          className={`${styles.button}`}
          onClick={() => setSelectedTab(1)}
          role="tab"
          aria-selected={selectedTab === 1 ? 'true' : 'false'}
          id="track-tab"
          aria-controls="track-panel"
        >
          <span>Keep track</span>
        </button>

        <button
          className={styles.button}
          onClick={() => setSelectedTab(2)}
          role="tab"
          aria-selected={selectedTab === 2 ? 'true' : 'false'}
          id="recommended-tab"
          aria-controls="recommended-panel"
        >
          <span>Recommend</span>
        </button>

        <button
          className={styles.button}
          onClick={() => setSelectedTab(3)}
          role="tab"
          aria-selected={selectedTab === 3 ? 'true' : 'false'}
          id="history-tab"
          aria-controls="history-panel"
        >
          <span>History</span>
        </button>
      </div>

      {selectedTab === 1 && (
        <div id="track-panel" role="tabpanel" aria-labelledby="track-tab">
          <Track />
        </div>
      )}

      {selectedTab === 2 && (
        <div id="recommended-panel" role="tabpanel" aria-labelledby="recommended-tab">
          <Recommend />
        </div>
      )}

      {selectedTab === 3 && (
        <div id="history-panel" role="tabpanel" aria-labelledby="history-tab">
          <History />
        </div>
      )}
    </div>
  );
}
