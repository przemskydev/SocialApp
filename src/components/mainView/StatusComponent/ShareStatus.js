import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { app, storage } from "../../../config/base";
import useStatusValidation from '../StatusValidation'
import {
  Button,
  TextField,
  CardActions,
  IconButton,
  Tooltip
} from '@material-ui/core';
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
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      }
    },
    margin: 'auto 1rem',
    width: '-webkit-fill-available',
  },
  input: {
    display: 'none',
  }
}))

const setId = () => {
  return Date.now()
}

const INITIAL_STATE_STATUS = {
  status: ''
}

export default function Status() {

  const id = setId();

  const {
    values,
    handleChangeStatus,
    handleCheckStatus,
    errors
  } = useStatusValidation(INITIAL_STATE_STATUS, addStatus);

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null)
  const classes = useStyles();


  function handleChange(e) {
    const file = e.target.files[0];
    const fileType = file.type;
    const typeList = ['image/jpeg', 'image/png'];

    if (file) {
      typeList.includes(fileType) ? setImage(file) : console.error('Select image')
    }
  }

  function handleUpload() {

    if (image) {
      const uploadTask = storage.ref(`status/${id}/${image.name}`).put(image)
      uploadTask.on('state_changed', snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
        error => {
          setError(error)
        }
      )
    }
    setImage(null)
  }

  function addStatus() {
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
      isImage = image ? true : false,
      imageName = image ? image.name : '';


    app
      .firestore()
      .collection('status')
      .doc(`${id}`)
      .set({
        id: id,
        author: userName,
        context: values.status,
        time: time,
        commentList: [],
        likes: [],
        img: isImage,
        imageName: imageName
      }, { merge: true })

    handleUpload()
  }

  return (
    <>

      <TextField className={classes.searchBar}
        error={errors.status ? true : false}
        helperText={errors.status ? "You can not be without feelings. Share something" : null}
        id="outlined-textarea"
        label="How are you?"
        multiline
        name='status'
        variant="outlined"
        value={values.status}
        onChange={handleChangeStatus}
      />

      <CardActions disableSpacing>
        {/* Camera button */}
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="icon-button-file">
          <Tooltip title='Add some picture!' placement="right" >
            <IconButton style={{ color: '#DDD' }} aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </Tooltip>
          {
            image ? `${image.name}` : `${progress}` === '0' ? '' : `${progress}`
          }
          {
            error ? console.error(error) : ''
          }
        </label>
        {/* Share status button */}

        <Tooltip title='Click here to share your status' placement='left'>
          <Button
            style={{ marginLeft: 'auto', color: '#DDD', fontSize: '15px' }}
            onClick={handleCheckStatus}
          >
            <strong>SHARE</strong>
          </Button>
        </Tooltip>

      </CardActions>
    </>
  )
}