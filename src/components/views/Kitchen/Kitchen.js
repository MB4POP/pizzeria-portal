import React from 'react';
import styles from './Kitchen.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const demoContent = [
  {id: '1', status: 'ordered', order: 12},
  {id: '2', status: 'ordered', order: 15},
  {id: '3', status: 'ordered', order: 21},
  {id: '4', status: 'done', order: 33},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'done':
      return (
        <Button>done</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
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
            </TableCell>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

Kitchen.propTypes = {
  props: PropTypes.string,
};

export default Kitchen;
