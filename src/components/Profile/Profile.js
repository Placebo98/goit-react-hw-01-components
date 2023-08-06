import {Container, ImgAvatar, ListStats, ListItem, NameContainer} from './Profile.styled'

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container >
      <NameContainer >
        <ImgAvatar src={avatar} alt="User avatar" />
        <p >{username}</p>
        <p >{tag}</p>
        <p >{location}</p>
      </NameContainer>

      <ListStats >
        <ListItem>
          <span >Followers</span>
          <span >{stats.followers}</span>
        </ListItem>
        <ListItem>
          <span >Views</span>
          <span >{stats.views}</span>
        </ListItem>
        <ListItem>
          <span >Likes</span>
          <span >{stats.likes}</span>
        </ListItem>
      </ListStats>
    </Container>
  );
}
