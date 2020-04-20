import * as React from 'react';
import { useState, useEffect } from 'react';
import FullWidthTabs from './ProfileTab';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/1ok.jpg'
import { app } from "../../config/base";
import { useParams } from 'react-router-dom';


const joinDate = () => {
  const joinDate = app.auth().currentUser.metadata.creationTime;
  const creationDate = joinDate.slice(4, 16);

  return creationDate;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1rem auto',
    width: '70vh'
  },
  image: {
    width: 80,
    height: 80,
  },
  profile: {
    textAlign: 'center',
  },
  about: {
    borderBottom: '1px solid #3F51B5',
  }
}));

export default function ProfileCard() {
  let { id } = useParams()
  const classes = useStyles();

  // console.log(app.auth().currentUser.displayName);
  // console.log(id);

  const [about, setAbout] = useState(() => {
    app.firestore()
      .collection('user')
      .doc(`${id}`)
      .get()
      .then(doc => {
        setAbout(doc.data().aboutme)
      })
      .catch(err => console.errror(err))
  });
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    aboutMeEdit()
  })

  const aboutMeEdit = () => {
    if (about) {
      app.firestore()
        .collection('user')
        .doc(`${id}`)
        .update({
          aboutme: about
        })
    } else {

    }
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleAbout = (e) => {
    setAbout(e.target.value)
  }

  const field = () => {
    if (!edit) {
      return (
        <Typography
          component="p"
          style={{ padding: '1.5rem' }
          }
        >
          {about ? about : 'Loading...'}
        </Typography >
      )
    } else {
      return (
        <Typography
          component="input"
          style={{ padding: '1.5rem' }}
          value={about}
          onChange={handleAbout}
        />
      )
    }
  }

  const displayButton = (id) => {
    const currentUser = app.auth().currentUser.displayName
    const user = id

    if (currentUser === user) {
      return (
        <>
          <Button variant="outlined" color="primary" disabled>
            Follow
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleEdit}>
            {edit ? 'SAVE' : 'EDIT'}
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button variant="outlined" color="primary" onClick={follow}>
            Follow
          </Button>
          <Button variant="outlined">
            DM
          </Button>
        </>
      )
    }
  }

  const follow = () => {
    const userRef = app.firestore().collection('user').doc(`${id}`);
    const currentUser = app.auth().currentUser.displayName;
    const followerData = currentUser;

    app.firestore().runTransaction(trans => {
      return trans.get(userRef).then(doc => {
        if (!doc.data().followers) {
          trans.set({
            followers: followerData
          })
        } else {
          const newFollowersList = doc.data().followers;
          newFollowersList.push(followerData);
          trans.update(userRef, { followers: newFollowersList })
        }
      })
    })

    setFollowingProfile(currentUser, id)
  }

  const setFollowingProfile = (currentUser, follower) => {
    const userLogged = currentUser;
    const userToFollow = follower;
    const userRef = app.firestore().collection('user').doc(`${userLogged}`);

    console.log(`Watched profile to follow ${userToFollow}`)
    console.log(`${userLogged} Logged in`)
    console.log(userRef)

    app.firestore().runTransaction(trans => {
      return trans.get(userRef).then(doc => {
        if (!doc.data().following) {
          trans.set({
            following: userToFollow
          })
          console.log(doc.data().following)
        } else {
          const newFollowersList = doc.data().following;
          newFollowersList.push(userToFollow);
          console.log(newFollowersList)
          trans.update(userRef, { following: newFollowersList })
        }
      })
    })
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            {/* My profile */}
            <Grid item xs={12} className={classes.profile}>
              <Typography variant="h6" style={{ borderBottom: '1px solid #3F51B5' }}>
                My profile
            </Typography>
            </Grid>
            {/* Image and Name */}
            <Grid item xs={6}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={6}>
                <img className={classes.image} alt="logo" src={logo} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">
                  {/* {userName()} */}
                  {id}
                </Typography>
              </Grid>
            </Grid>
            {/* Follow BTN */}
            <Grid item xs={6}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {
                displayButton(id)
              }

            </Grid>
            {/* About me head */}
            <Grid item xs={6} className={classes.about}>
              <Typography variant="h6">
                About me:
            </Typography>
            </Grid>
            {/* Join Date */}
            <Grid item xs={6}
              container
              direction="row"
              justify="flex-end">
              <Typography component="span" style={{ fontSize: '0.7rem' }}>
                Joined: {joinDate()}
              </Typography>
            </Grid>
            {/* About me TEXT */}
            <Grid item xs={12}>

              {field()}

            </Grid>
            {/* Tab */}
            <FullWidthTabs />
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  )
}