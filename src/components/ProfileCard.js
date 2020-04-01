import * as React from 'react';
import FullWidthTabs from './ProfileTab';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from './img/1ok.jpg'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1rem auto',
    width: '70vh'
  },
  image: {
    width: 80,
    height: 80,
  },
  profile: {
    textAlign: 'center',
  },
  about: {
    borderBottom: '1px solid #3F51B5',
  }
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
}));

export default function ProfileCard() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.profile}>
            <Typography variant="h6">
              My profile
            </Typography>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={6}>
              <img className={classes.image} alt="logo" src={logo} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">
                Name
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="flex-end"
            alignItems="center">
            <Button variant="outlined" color="primary">
              Follow
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.about}>
            <Typography variant="h6">
              About me:
            </Typography>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="flex-end">
            <Typography component="span" style={{ fontSize: '0.7rem' }}>
              Joined: DATE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" style={{ padding: '1.5rem' }}>
              TEXT
            </Typography>
          </Grid>
          <FullWidthTabs />
        </Grid>
      </Paper>
    </div>
  )
}