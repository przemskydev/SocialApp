import * as React from 'react';
import ButtonAppBar from '../mainView/ButtonAppBar';
import { Typography, Container } from '@material-ui/core';
import ProfileCard from './ProfileCard';

export function ProfileView() {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '90vh',
            paddingTop: '64px'
          }}
        >
          <ProfileCard />
        </Typography>
      </Container>
    </>
  )
}