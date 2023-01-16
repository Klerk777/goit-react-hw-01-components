import styles from './FriendListItem.module.scss';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={styles.status}></span>
      <img className={styles.avatar} src="" alt="User avatar" width="48" />
      <p className={styles.name}></p>
    </li>
  );
}

/* Опис компонента <FriendListItem>

Компонент повинен приймати кілька пропів:

    avatar - посилання на аватар
    name - ім'я друга
    isOnline - буль, що сигналізує про стан друга: в мережі або ні.

Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.

Компонент повинен створювати DOM наступної структури.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */
