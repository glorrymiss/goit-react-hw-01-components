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

  stats,
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
        {
          <ProfileList
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes}
          />
        }
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
