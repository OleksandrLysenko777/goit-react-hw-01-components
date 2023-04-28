import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './friendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(el => (
        <FriendListItem {...el} key={el.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;