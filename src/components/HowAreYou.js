import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: '75vh',
  },
}));

export default function HowAreYou() {
  const classes = useStyles();

  return (
    <Typography variant="h1" gutterBottom>
      <Paper className={classes.paper} elevation={3} >
        How are you?
      </Paper>
    </Typography>
  )
}