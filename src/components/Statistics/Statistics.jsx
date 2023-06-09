import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

import { StatList, Statistic, Title } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          );
        })}
      </StatList>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
