import React from 'react';
import styles from '../Waiter/Waiter.scss';
import PropTypes from 'prop-types';

const WaiterOrderInfo = props => (
  <h2 className={styles.component}>{props.match.params.id}</h2>
);

WaiterOrderInfo.propTypes = {
  match: PropTypes.any,
};

export default WaiterOrderInfo;
