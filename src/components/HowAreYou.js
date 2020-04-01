import * as React from 'react'
import {
  Button,
  TextField,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vh',
    margin: '1rem 0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  searchBar: {
    margin: 'auto 1rem',
    width: '-webkit-fill-available'
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
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              P
            </Avatar>
          }
          title="Pszemsky"
        />
        <TextField className={classes.searchBar}
          id="outlined-textarea"
          label="How are you?"
          placeholder="Say something nice"
          multiline
          variant="outlined"
        />
        <CardActions disableSpacing>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
          <Button variant="outlined" color="primary" style={{ marginLeft: 'auto' }}>
            SHARE
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}