import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '90vh',
    margin: '1rem 0',
    backgroundColor: '#777'
  }
}))

export default function NoPostInfo(props) {
  const classes = useStyles();
  let postContent = props.context;

  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">

        <Card className={classes.paper}>
          <Grid item xs={12}>

            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: 'center' }}>
                {postContent}
              </Typography>
            </CardContent>

          </Grid>
        </Card>
      </Grid>
    </div>
  )
}