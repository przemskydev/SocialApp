import * as React from 'react';
import Navbar from '../mainView/Navbar/Navbar';
import { Typography, Container } from '@material-ui/core';
import ProfileCard from './ProfileCard';
import './profile.css'

export function ProfileView() {
  return (
    <>
      <Navbar back/>
      <Container maxWidth='xl' className='profileView'>
        <Typography
          component="div"
        >
          <ProfileCard />
        </Typography>
      </Container>
    </>
  )
}