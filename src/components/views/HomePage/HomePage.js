import React from 'react';
import styles from './HomePage.scss';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalPizzaRoundedIcon from '@material-ui/icons/LocalPizzaRounded';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPizzaRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pizzeria"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalOfferIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Local Offer"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AirportShuttleIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Takeaway Offer"  />
      </ListItem>
    </List>
  );
}
const HomePage = () => (
  <Paper className={styles.component}>
    <Box display="flex">
      <h2>Homepage view</h2>
      <Box m={2}>
        <ContactMailIcon />
      </Box>
    </Box>
    {InsetDividers()}
  </Paper>
);

HomePage.propTypes = {
  props: PropTypes.string,
};

export default HomePage;
