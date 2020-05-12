import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core/';
import { app } from "../../../config/base";
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/img/logo.svg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  },
  bar: {
    backgroundColor: '#222222'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const user = app.auth().currentUser.displayName;

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>

          {/* logo */}
          <Typography variant="h6" className={classes.title}>
            <Link
              to='/'
              className={classes.link}
            >
              <img
                style={{ width: '50px', height: '50px' }}
                src={logoImg}
                title='9Social'
                alt='9Social' />
              {
                (props.back) ? (
                  <ArrowBackIcon />
                ) : (
                    ''
                  )
              }
            </Link>
          </Typography>

          {/* Log out */}
          <Button
            color="inherit"
            onClick={() => app.auth().signOut()}
          >
            <ExitToAppIcon />
            Log Out {user}
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
