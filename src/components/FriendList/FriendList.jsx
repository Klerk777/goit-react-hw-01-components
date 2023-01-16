import styles from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      <FriendListItem />
    </ul>
  );
}
/* Опис компонента <FriendList>

Компонент повинен приймати один проп friends – масив об'єктів друзів.

Компонент повинен створювати DOM наступної структури.

<ul class="friend-list">
  <!-- Довільна кіл-сть FriendListItem -->
</ul> */

/* Приклад використання

import friends from "path/to/friends.json";

<FriendList friends={friends} />; */
