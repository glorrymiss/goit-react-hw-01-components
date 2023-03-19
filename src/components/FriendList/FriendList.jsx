import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
