import * as React from 'react'
import HowAreYou from './HowAreYou';
import Post from './Post'


export default function MainView() {

  return (
    <React.Fragment>
      <HowAreYou />
      <Post />
      <Post />

    </React.Fragment>
  )
}