import PropTypes from 'prop-types';
import { ProfileList } from '../ProfileList/ProfileList';

import {
  Description,
  Profil,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,

  followers,
  views,
  likes,
}) {
  return (
    <Profil>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        {<ProfileList followers={followers} views={views} likes={likes} />}
      </Stats>
    </Profil>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
