/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styles from './Login.scss';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const Login = () => (
  <form className={styles.container} noValidate autoComplete="off">
    <Paper>
  	  <TextField
        id="outlined-login"
        label="Login"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={styles.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
    </Paper>

    <br></br>Do not you have an account? <br></br><br></br>
    Please enter our form and enjoy being our gest!!!
    <br></br><br></br>

    <Paper>
      <TextField
        id="outlined-login"
        label="Enter your e-mail"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-login"
        label="Enter password"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-login"
        label="Repeat password"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        variant="outlined"
      />

    </Paper>
  </form>
);

Login.propTypes = {
  props: PropTypes.string,
};

export default Login;
