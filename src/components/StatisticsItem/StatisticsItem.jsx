import PropTypes from 'prop-types';

import { Item, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticsItem.PropType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
