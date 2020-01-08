import React from 'react';
import styles from '../Tables/Tables.scss';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const TablesBooking = () => (
  <Paper className={styles.component}>
    <Button>
      <Link to='/tables'>Back</Link>
    </Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
        </TableRow>
      </TableHead>
    </Table>
    <TableBody>
    </TableBody>
  </Paper>
);

TablesBooking.propTypes = {
  match: PropTypes.string,
};

export default TablesBooking;
