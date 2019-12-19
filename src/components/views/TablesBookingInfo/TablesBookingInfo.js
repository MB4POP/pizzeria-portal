import React from 'react';
import styles from '../Tables/Tables.scss';
import PropTypes from 'prop-types';

const TablesBookingInfo = props => (
  <h2 className={styles.component}>{props.match.params.id}</h2>
);

TablesBookingInfo.propTypes = {
  match: PropTypes.any,
};

export default TablesBookingInfo;
