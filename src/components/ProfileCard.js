import * as React from 'react';
import FullWidthTabs from './ProfileTab';

import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './img/1ok.jpg'


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
}));

export default function ProfileCard() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.profile}>
            <Typography variant="h6" style={{ borderBottom: '1px solid #3F51B5' }}>
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