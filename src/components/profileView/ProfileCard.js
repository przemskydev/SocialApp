import * as React from 'react';
import { useState, useEffect } from 'react';
import FullWidthTabs from './ProfileTab';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/fishok.jpg'
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
    width: '70vh',
    height: '80vh',
    backgroundColor: '#444'

  },
  image: {
    width: 80,
    height: 80,
  },
  profile: {
    textAlign: 'center',
  },
  about: {
    borderBottom: '1px solid #00A1BD',
  }
}));

export default function ProfileCard() {
  let { id } = useParams()
  const classes = useStyles();

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
  // const [followed, setFollowed] = useState(false)

  useEffect(() => {
    aboutMeEdit()
  })

  useEffect(() => {
    handleDisableBtn()
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
          style={{ padding: '1.5rem', fontSize: '1.3rem' }
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

  const handleDisableBtn = () => {
    const current = app.auth().currentUser.displayName;

    app.firestore()
      .collection('user')
      .doc(`${id}`)
      .get()
      .then(doc => {
        if ((doc.data().followers.indexOf(current)) > -1) {
          document.querySelector('#followBtn').classList.add('Mui-disabled')
        }
      }
      )
  }
  // BUTTONS
  const editBtn = {
    borderColor: '#00A1BD',
    color: '#00A1BD'
  }

  const displayButton = (id) => {
    const currentUser = app.auth().currentUser.displayName
    const user = id

    if (currentUser === user) {
      return (
        <>
          <Button
            style={{ marginRight: '1rem' }}
            variant="outlined"
            color="primary"
            disabled
          >
            Follow
          </Button>

          <Button
            variant="outlined"
            style={editBtn}
            onClick={handleEdit}
          >
            {edit ? 'SAVE' : 'EDIT'}
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button
            id='followBtn'
            style={{ marginRight: '1rem' }}
            variant="outlined"
            color="primary"
            onClick={follow}
          >
            Follow
          </Button>

          <Button
            id='dm'
            variant="outlined"
          >
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

          if (newFollowersList.indexOf(followerData)) {
            document.querySelector('#followBtn').classList.add('Mui-disabled')

          }

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

    app.firestore().runTransaction(trans => {
      return trans.get(userRef).then(doc => {
        if (!doc.data().following) {
          trans.set({
            following: userToFollow
          })
        } else {
          const newFollowersList = doc.data().following;
          newFollowersList.push(userToFollow);
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
            {/* <Grid item xs={12} className={classes.profile}>
              <Typography variant="h6" style={{ borderBottom: '1px solid #3F51B5' }}>
                My profile
              </Typography>
            </Grid> */}
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
                <Typography variant="h4">
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