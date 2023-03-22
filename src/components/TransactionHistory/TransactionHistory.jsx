import { TransactionsItem } from '../transactionsItem/TransactionsItem';
import PropTypes from 'prop-types';
import { Thead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <Thead>Type</Thead>
          <Thead>Amount</Thead>
          <Thead>Currency</Thead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TransactionsItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
};
