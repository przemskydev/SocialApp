import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  comment: {
    width: '80vh',
    margin: '1rem 0',
    backgroundColor: '#666',
    color: '#DDD'
  }
}))

export default function Comment(props) {
  const classes = useStyles();
  const author = props.author;
  const avatar = author.charAt(0);
  const time = props.time;
  const commentContent = props.commentContext

  return (
    <Grid item xs={12}>
      <Grid container justify="center">
        <Card className={classes.comment}>

          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {avatar}
              </Avatar>
            }
            title={author}
            subheader={time}
          />

          <CardContent>
            <Typography
              variant="body2"
              style={{color:'#DDD'}}
              component="p">
              {commentContent}
            </Typography>
          </CardContent>

        </Card>
      </Grid>
    </Grid>
  )
}