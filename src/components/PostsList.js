import React, { useState, useEffect } from 'react'
import Post from './Post'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { app } from "../config/base";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    height: '65vh',
    overflowY: 'auto',
    overflowX: 'hidden',
  }
}));

export default function PostsList() {
  const classes = useStyles();

  const [post, setPostList] = useState(null);

  useEffect(() => {
    listenForPosts()
  }, [])

  const listenForPosts = () => {
    app
      .firestore()
      .collection('status')
      .onSnapshot(snapshot => {
        const allPosts = []
        snapshot.forEach(doc => allPosts.push(doc.data()));
        setPostList(allPosts)
      }, (error) => console.error(error));
  }
  console.log(post)

  if(!post){
    return (
      <>
        There is no post
      </>
    )
  }

  const renderPostList = () => {
    console.log(post)
    if (!post.length) {
      return (
        <>
          There is no post yet
        </>
      )
    }

    return post.map(({ author, context, time }, index) => (
      <Post
        key={index}
        author={author}
        context={context}
        time={time}
      />
    ))
  }

  return (
    <React.Fragment>
      <Typography component="div" className={classes.root}>
        {
          renderPostList()
        }
      </Typography>
    </React.Fragment>
  )
}