import * as React from 'react';
import ButtonAppBar from './ButtonAppBar';
import MainView from './MainView';
import { Typography, Container } from '@material-ui/core';

export function Main() {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh', paddingTop: '64px' }}>
          <MainView />
        </Typography>
      </Container>
    </>
  )
}