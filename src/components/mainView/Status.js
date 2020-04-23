import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  TextField,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { app } from "../../config/base";
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles(() => ({
  root: {
    width: '95vh',
    margin: '1rem 0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  searchBar: {
    margin: 'auto 1rem',
    width: '-webkit-fill-available'
  }
}))

const setId = () => {
  return Date.now()
}

export default function Status() {
  const [statusValue, setStatus] = useState('')
  const classes = useStyles();


  const handleSetStatusValue = (e) => {
    setStatus(e.target.value)
  }

  const handleStatus = () => {
    // set date data to the status
    const timestamp = Date.now(),
      date = new Date(timestamp),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = `${date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()}`,
      hours = `${date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()}`,
      minutes = `${date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()}`,
      sec = `${date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()}`,
      time = `${hours}:${minutes}:${sec} ${day}/${(month < 10) ? ('0' + month) : month}/${year}`,
      userName = app.auth().currentUser.displayName,
      id = setId();

    app
      .firestore()
      .collection('status')
      .doc(`${id}`)
      .set({
        id: id,
        author: userName,
        context: statusValue,
        time: time,
        commentList: [],
        likes: []
      }, { merge: true })

    setStatus('')

  }

  return (
    <>
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
        {/* Camera button - future task */}
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
        {/* Share status button */}
        <Button
          variant="outlined"
          color="primary"
          style={{ marginLeft: 'auto' }}
          onClick={handleStatus}
        >
          SHARE
        </Button>

      </CardActions>
    </>
  )
}