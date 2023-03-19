import PropTypes from 'prop-types';
import { Data } from './TransactionsItem.styled';

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </tr>
  );
};

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
