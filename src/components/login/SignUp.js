import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { app } from "../../config/base";
import useFormValidation from './FormValidation'
import validateAuth from './ValidateAuth'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//initial state as object with initial values
const INITIAL_STATE = {
  firstName: '',
  email: '',
  password: ''
}

const SignUp = ({ history }) => {
  //Destructuring returned object from custom hook usefromValidation
  const {
    handleSignUp,
    handleChange,
    handleBlur,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validateAuth, authenticateUser)

  const handleSetName = () => {
    app
      .firestore()
      .collection('user')
      .doc(`${values.firstName}`)
      .set({
        name: values.firstName,
        aboutme: 'Click edit button',
        followers: [],
        following: []
      })
  }

  async function authenticateUser() {
    // event.preventDefault();
    const { email, password, firstName } = values;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          return result.user.updateProfile({
            displayName: firstName
          })
        });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSignUp} >
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                error={errors.firstName ? true : false}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Your Full Name"
                helperText={errors.firstName ? "Incorrect entry. Min 3 char" : null}
                autoFocus
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.email ? true : false}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={errors.email ? "Incorrect entry" : null}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.password ? true : false}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={errors.password ? "Incorrect entry. Min 6 char" : null}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSetName}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">

            <Grid item>
              <Link to='/login' style={{ textDecoration: 'none' }} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>

          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);
