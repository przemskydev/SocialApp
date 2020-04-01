import * as React from 'react';
import FullWidthTabs from './ProfileTab';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    width: 128,
    height: 128,
  },
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
          <Grid item xs={12}>
            Profile
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={6}>
              <img className={classes.image} alt="logo" src='' />
            </Grid>
            <Grid item xs={6}>
              Name
          </Grid>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="flex-end">
            <Button variant="outlined" color="primary">
              Follow
            </Button>
          </Grid>
          <Grid item xs={6} style={{ borderBottom: '1px solid blue' }}>
            O MNIE
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justify="flex-end">
            JOINED: TIME
          </Grid>
          <Grid item xs={12}>
            TEKST
          </Grid>
          <FullWidthTabs />
        </Grid>
      </Paper>
    </div>
  )
}