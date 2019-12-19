import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink className={styles.navLink}
      exact to={`${process.env.PUBLIC_URL}/`}
      activeClassName="active">home
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/login`}
      activeClassName="active">login
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/kitchen`}
      activeClassName="active">kitchen
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/tables`}
      activeClassName="active">tables
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/tables/booking/book/:id`}
        activeClassName="active">tables/booking/book
      </Link>
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/tables/booking/new`}
        activeClassName="active">tables/booking/new
      </Link>
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/tables/events/event/:id`}
        activeClassName="active">tables/events/event
      </Link>
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/tables/events/new`}
        activeClassName="active">tables/events/new
      </Link>
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/waiter`}
      activeClassName="active">waiter
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/waiter/ordering/new`}
        activeClassName="active">/waiter/ordering/new
      </Link>
      <Link className={styles.navLink}
        to={`${process.env.PUBLIC_URL}/waiter/ordering/order/:id`}
        activeClassName="active">waiter/ordering/order
      </Link>
    </NavLink>
  </nav>
);

export default PageNav;

