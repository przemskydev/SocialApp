import * as React from 'react';
import FullWidthTabs from './ProfileTab';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1rem auto',
    width: '60vh'
  },
  // image: {
  //   width: 128,
  //   height: 128,
  // },
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
          <Grid item xs={6}>
            IMG / NAME
          </Grid>
          <Grid item xs={6}>
            FOLLOW BTN
          </Grid>
          <Grid item xs={6}>
            O MNIE
          </Grid>
          <Grid item xs={6}>
            JOINED
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