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
        {items.map((item, index) => {
          return (
            <TransactionsItem
              // style={{
              //   backgroundColor: index % 2 === 1 ? 'gray' : 'red',
              // }}
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
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
