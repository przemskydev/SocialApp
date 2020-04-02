import * as React from 'react';
import { Router } from '@reach/router';
import ButtonAppBar from './ButtonAppBar';
import MainView from './MainView';
import { Typography, Container } from '@material-ui/core';
import ProfileCard from './ProfileCard';

export function Main() {
  return (
    <div>
      <ButtonAppBar />
      <Container>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh', paddingTop: '64px' }}>
          <Router>
            <MainView path='/' />
            <ProfileCard path='/profile' />
          </Router>
        </Typography>
      </Container>
    </div>
  )
}

// export default Main;