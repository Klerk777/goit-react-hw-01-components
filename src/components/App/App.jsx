import styles from './App.module.scss';
import { user, data, friends } from 'data';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList>
        <fri
      </FriendList>
    </div>
  );
};
