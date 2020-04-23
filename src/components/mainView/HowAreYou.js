import React from 'react'
import {
  Card,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardHeaderComponent from './CardHeaderComonent'
import Status from './Status'


const useStyles = makeStyles(() => ({
  root: {
    width: '95vh',
    margin: '1rem 0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function HowAreYou() {
  const classes = useStyles();
  
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      item xs={12}>
      <Card className={classes.root}>
        {/* Header avatar and name */}
        <CardHeaderComponent />
        {/* Status input */}
        <Status />
        
      </Card>
    </Grid>
  )
}