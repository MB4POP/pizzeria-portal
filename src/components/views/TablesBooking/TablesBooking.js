import React from 'react';
import styles from '../Tables/Tables.scss';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const TablesBooking = () => (
  <Paper className={styles.component}>
  </Paper>
);

TablesBooking.propTypes = {
  match: PropTypes.string,
};

export default TablesBooking;
