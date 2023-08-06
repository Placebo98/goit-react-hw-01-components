import {Point} from './FriendList.styled'

export function FriendListItem({ friend }) {
  return (
    <>
      <Point style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }} >{friend.isOnline}</Point>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </>
  );
}
