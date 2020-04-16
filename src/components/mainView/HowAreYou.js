import React, { useState } from 'react'
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
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { app } from "../../config/base";

const randomColor = () => {
  let color = '';

  let num1 = (Math.floor(Math.random() * 256)),
    num2 = (Math.floor(Math.random() * 256)),
    num3 = (Math.floor(Math.random() * 256));

  color = `rgb(${num1},${num2},${num3})`

  return color;

}

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
    backgroundColor: randomColor(),
  },
  searchBar: {
    margin: 'auto 1rem',
    width: '-webkit-fill-available'
  }
}));

const setName = () => {
  const user = app.auth().currentUser;
  const name = user.displayName

  return name
}

const setAvatar = (name) => {
  const avName = name;
  let avatar = avName.charAt(0);

  return avatar
}

const setId = () => {
  return Date.now()
}

export default function HowAreYou() {
  const classes = useStyles();

  const [statusValue, setStatus] = useState('')

  const handleSetStatusValue = (e) => {
    setStatus(e.target.value)
  }

  const handleStatus = () => {

    const timestamp = Date.now();
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = `${date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()}`;
    const hours = `${date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()}`;
    const minutes = `${date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()}`;
    const sec = `${date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()}`;
    const time = `${hours}:${minutes}:${sec} ${day}/${(month < 10) ? ('0' + month) : month}/${year}`
    const userName = setName();
    const id = setId()
    // console.log(userName, statusValue);
    // console.log(time)

    app
      .firestore()
      .collection('status')
      .doc(`${id}`)
      .set({
        id: id,
        author: userName,
        context: statusValue,
        time: time,
        commentList: []
      }, { merge: true })

    setStatus('')

  }

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
              {setAvatar(setName())}
            </Avatar>
          }
          title={setName()}
        />
        <TextField className={classes.searchBar}
          id="outlined-textarea"
          label="How are you?"
          placeholder="Say something nice"
          multiline
          variant="outlined"
          value={statusValue}
          onChange={handleSetStatusValue}
        />
        <CardActions disableSpacing>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginLeft: 'auto' }}
            onClick={handleStatus}
          >
            SHARE
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}