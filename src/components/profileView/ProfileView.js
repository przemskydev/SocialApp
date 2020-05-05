import * as React from 'react';
import ButtonAppBar from '../mainView/ButtonAppBar';
import { Typography, Container } from '@material-ui/core';
import ProfileCard from './ProfileCard';
import './profile.css'

export function ProfileView() {
  return (
    <>
      <ButtonAppBar back/>
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