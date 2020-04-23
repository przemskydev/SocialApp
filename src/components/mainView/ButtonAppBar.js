import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core/';
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
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const user = app.auth().currentUser.displayName;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          
          {/* logo */}
          <Typography variant="h6" className={classes.title}>
            <Link
              to='/'
              className={classes.link}
            >
              9Social
            </Link>
          </Typography>

          {/* Log out */}
          <Button
            color="inherit"
            onClick={() => app.auth().signOut()}
          >
            Log Out {user}
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
