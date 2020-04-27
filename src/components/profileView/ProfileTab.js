import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { app } from "../../config/base";
import { useParams } from 'react-router-dom';
import FollowerView from './followersView/Follower'
import UserPostView from './followersView/UserPostView'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  List
} from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.background.paper,
    width: '-webkit-fill-available',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles(),
    theme = useTheme();
  let { id } = useParams();

  const [value, setValue] = useState(0),
    [myFollowersList, setFollowers] = useState(null),
    [myStatusList, setMyStatus] = useState(null),
    [followingers, setFollowingers] = useState(null);

  const handleChange = (value, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    const followersList = () => {
      app
        .firestore()
        .collection('user')
        .doc(`${id}`)
        .onSnapshot(snap => {
          const followers = (snap.data().followers)
          setFollowers(followers)
        })
    }
    followersList()
  }, [])

  useEffect(() => {
    const statusList = () => {
      app
        .firestore()
        .collection('status')
        .where('author', '==', `${id}`)
        .onSnapshot(snap => {
          const myPost = [];
          snap.forEach(doc => myPost.push(doc.data()))
          setMyStatus(myPost)
        })
    }
    statusList()
  }, [])

  useEffect(() => {
    const followingPeople = () => {
      app
        .firestore()
        .collection('user')
        .doc(`${id}`)
        .onSnapshot(snap => {
          const following = (snap.data().following)
          setFollowingers(following)
        })
    }
    followingPeople()
  }, [])

  const userPosts = () => {

    return (
      (myStatusList && myStatusList.length > 0)
        ?
        (
          myStatusList.map(status => {
            return (
              <UserPostView key={status.id} {...status} />
            )
          }).reverse()
        )
        :
        (`Don't have posts yet`)
    )
  }

  const userFollowers = () => {

    return (
      (myFollowersList && myFollowersList.length > 0)
        ?
        (
          myFollowersList.map(follower => {
            return (
              <FollowerView key={follower} follower={follower} />
            )
          }
          )
        )
        :
        (`Nobody FOLLOW You`)
    )
  }

  const myFollowing = () => {

    return (
      (followingers && followingers.length > 0)
        ?
        (
          followingers.map(fling => {
            return (
              <FollowerView key={fling} follower={fling} />
            )
          })
        )
        :
        (`Dont have anybody to follow`)
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Followers" {...a11yProps(1)} />
          <Tab label="Following" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* posts */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <List>
            {
              userPosts()
            }
          </List>
        </TabPanel>
        {/* follower */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <List>
            {
              userFollowers()
            }
          </List>
        </TabPanel>
        {/* followings */}
        <TabPanel value={value} index={2} dir={theme.direction}>
          <List>
            {
              myFollowing()
            }
          </List>
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}