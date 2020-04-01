import * as React from 'react'
import Post from './Post'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    height: '65vh',
    overflowY: 'auto',
    overflowX: 'hidden'
  }
}));

export default function PostsList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="div" className={classes.root}>
        <Post />
        <Post />
      </Typography>
    </React.Fragment>
  )
}