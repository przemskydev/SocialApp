import * as React from 'react'
import HowAreYou from './HowAreYou';
import PostsList from '../postView/PostsList'


export default function MainView() {

  return (
    <React.Fragment>
      <HowAreYou />
      <PostsList />
    </React.Fragment>
  )
}