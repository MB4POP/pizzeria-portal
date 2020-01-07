import React from 'react';
import styles from '../Tables/Tables.scss';
import PropTypes from 'prop-types';

const TablesEvent = props => (
  <h2 className={styles.component}>Tables event</h2>
);

TablesEvent.propTypes = {
  match: PropTypes.any,
};

export default TablesEvent;

