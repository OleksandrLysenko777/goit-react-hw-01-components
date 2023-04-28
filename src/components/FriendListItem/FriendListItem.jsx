import clsx from 'clsx';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      ></span>
      <img className={styles.avatar} src={avatar} alt="User's avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;