import SideBar from '@components/SideBar';
import styles from './DetailsSideBar.module.scss';
import HeaderSideBar from '@components/HeaderSideBar';
import Hero from './components/Hero';
import { Plus, ThumbsUp } from 'iconoir-react';
import Button from '@components/Button';

interface DetailsSideBarProps {
  data: any;
  handleClose: () => void;
}

export default function DetailsSideBar({ data, handleClose }: DetailsSideBarProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSideBar title={data.name || data.title} handleClose={handleClose} />
        <Hero filename={data.backdrop_path} />

        <main className={styles.main}>
          <div className={styles.synopsis}>{data.overview}</div>

          <div className={styles.status}>
            <div className={styles.message}>
              <div className="svg-container">
                <ThumbsUp />
              </div>
              Recommended by Jason Newington
            </div>

            <button>
              <Button>
                <Plus />
                Add to watch list
              </Button>
            </button>
          </div>

          <div className={styles.panel}>
            <h3>Have you watched this?</h3>

            <button>
              <Button>
                <Plus />
                Add to watch history
              </Button>
            </button>
          </div>

          <div className={styles.panel}>
            <h3>Recommend to a friend</h3>

            <button>
              <Button active>Send recommendation</Button>
            </button>
          </div>
        </main>
      </>
    </SideBar>
  );
}
