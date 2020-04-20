import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { app } from "../../config/base";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const showName = () => {
  const user = app.auth().currentUser.displayName;
  const link = `/profile/${user}`

  return link
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const user = app.auth().currentUser.displayName;
  const link = `/profile/${user}`

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'white'
              }}>
              9Social
            </Link>
          </Typography>

          <Link
            to={link}
            style={{
              textDecoration: 'none',
              color: 'white'
            }}>
            <Button color="inherit">My Profile</Button>
          </Link>

          <Button color="inherit" onClick={() => app.auth().signOut()}>Log Out {user}</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
