import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Waiter/Waiter.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', menu: 'menu', options: 'options',  orderDetails: 'cake', orderValue: '$10'},
  {id: '2', menu: 'menu', options: 'options', orderDetails: 'margeritta', orderValue: '$15'},
  {id: '3', menu: 'menu', options: 'options', orderDetails: 'hawai', orderValue: '$20'},
  {id: '4', menu: 'menu', options: 'options', orderDetails: 'boryna', orderValue: '$22'},
  {id: '5', menu: 'menu', options: 'options', orderDetails: 'supreme', orderValue: '$25'},
  {id: '6', menu: 'menu', options: 'options', orderDetails: 'super supreme', orderValue: '$27'},
];

const WaiterOrder = () => (
  <Paper className={styles.component}>
    <Button>
      <Link to='/waiter'>Booking</Link>
    </Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Order Details</TableCell>
          <TableCell>Order Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.menu && (
                <Button to='menu'>
                  {row.menu}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.options && (
                <Button to='options'>
                  {row.options}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.orderDetails}
            </TableCell>
            <TableCell>
              {row.orderValue}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

WaiterOrder.propTypes = {
  props: PropTypes.string,
};

export default WaiterOrder;
