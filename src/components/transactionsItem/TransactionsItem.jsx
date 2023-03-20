import PropTypes from 'prop-types';
import { Data, Wrap } from './TransactionsItem.styled';

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <Wrap>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Wrap>
  );
};

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
