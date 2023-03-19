import PropTypes from 'prop-types';

import { Label, Quantity, Wrap } from './ProfileList.styled';

export const ProfileList = ({ followers, views, likes }) => {
  return (
    <>
      <Wrap>
        <Label>Followers: </Label>
        <Quantity>{followers}</Quantity>
      </Wrap>
      <Wrap>
        <Label>Views: </Label>
        <Quantity>{views}</Quantity>
      </Wrap>
      <Wrap>
        <Label>Likes: </Label>
        <Quantity>{likes}</Quantity>
      </Wrap>
    </>
  );
};

ProfileList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
