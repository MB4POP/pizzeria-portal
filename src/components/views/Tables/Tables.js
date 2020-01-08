import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'reserved', order: 10},
  {id: '5', status: 'free', order: null},
  {id: '4', status: 'event', order: 30},

];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>Reservation</Button>
          <Button>Event</Button>
        </>
      );

    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Button><Link to='/tables/booking/:id'>Booking</Link></Button>
    <Button><Link to='/tables/booking/new'>New booking</Link></Button>
    <Button><Link to='/tables/events/:id'>Events</Link></Button>
    <Button><Link to='/tables/events/new'>New events</Link></Button>
    <br></br>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Date / Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

Tables.propTypes = {
  props: PropTypes.string,
};

export default Tables;
