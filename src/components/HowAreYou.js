import * as React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { red } from '@material-ui/core/colors';

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
  )
}